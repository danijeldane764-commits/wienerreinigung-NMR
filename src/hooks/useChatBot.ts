import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newUserMessage: Message = { role: 'user', content: userMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    let assistantContent = '';

    try {
      const { data, error: invokeError } = await supabase.functions.invoke('chat-bot', {
        body: { messages: [...messages, newUserMessage] },
      });

      if (invokeError) {
        console.error('Edge function error:', invokeError);
        setError('Verbindung fehlgeschlagen. Bitte versuchen Sie es erneut.');
        setMessages(prev => prev.slice(0, -1)); // Remove user message on error
        setIsLoading(false);
        return;
      }

      // Handle streaming response
      const reader = data.body?.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;

      if (!reader) {
        throw new Error('No response stream available');
      }

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant') {
                  return prev.map((m, i) => 
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      // Track message sent
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'chatbot_message_sent');
      }
    } catch (err) {
      console.error('Chat error:', err);
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const resetChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    resetChat,
  };
};
