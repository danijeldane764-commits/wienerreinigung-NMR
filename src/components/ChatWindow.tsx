import { useState, useEffect, useRef } from 'react';
import { X, Send, Phone, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { useChatBot } from '@/hooks/useChatBot';
import { trackEvent } from '@/utils/analytics';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [inputMessage, setInputMessage] = useState('');
  const [queuedMessages, setQueuedMessages] = useState<string[]>([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const { messages, isLoading, error, sendMessage } = useChatBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    inputRef.current?.focus();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isLoading && messages.length > 0) {
      inputRef.current?.focus();
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isLoading, messages]);

  useEffect(() => {
    const viewport = containerRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement | null;
    if (!viewport) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 8);
    };

    viewport.addEventListener('scroll', handleScroll);
    return () => viewport.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    
    if (isLoading) {
      setQueuedMessages(prev => [...prev, inputMessage]);
      setInputMessage('');
    } else {
      sendMessage(inputMessage);
      setInputMessage('');
    }
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (!isLoading && queuedMessages.length > 0) {
      const nextMessage = queuedMessages[0];
      setQueuedMessages(prev => prev.slice(1));
      sendMessage(nextMessage);
    }
  }, [isLoading, queuedMessages, sendMessage]);

  const handleContainerWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const viewport = containerRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement | null;
    if (!viewport) return;
    e.preventDefault();
    viewport.scrollTop += e.deltaY;
  };

  const handleWhatsAppClick = () => {
    trackEvent('chatbot_whatsapp_clicked');
    window.open(
      'https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20komme%20vom%20Chatbot%20und%20habe%20Interesse%20an%20einer%20Besichtigung.',
      '_blank'
    );
  };

  const handleCallClick = () => {
    trackEvent('chatbot_call_clicked');
    window.location.href = 'tel:+436677680897';
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleContainerWheel}
      className="fixed bottom-6 right-6 w-[400px] h-[600px] min-h-0 bg-white rounded-2xl shadow-2xl flex flex-col z-[1001] md:block hidden animate-in slide-in-from-bottom-4 duration-300 overscroll-contain"
    >
      {/* Header */}
      <div className="bg-[#1E40AF] text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E40AF] font-bold">
            N
          </div>
          <div>
            <h3 className="font-semibold text-sm">Nikola Miloradovic</h3>
            <p className="text-xs text-white/80">Online - Antwortet sofort</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-white/20 text-white"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 min-h-0 bg-gray-50">
        <div className="p-4 pb-24 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg mb-2">👋 Hallo!</p>
              <p className="text-sm">Ich bin der virtuelle Assistent von Nikola Miloradovic Reinigung.</p>
              <p className="text-sm mt-2">Wie kann ich dir heute helfen?</p>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.role === 'user'
                    ? 'bg-[#1E40AF] text-white'
                    : 'bg-white text-[#002060] border border-gray-200'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-[#002060] border border-gray-200 rounded-lg px-4 py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Scroll to Bottom Button */}
      {!isAtBottom && (
        <Button
          onClick={scrollToBottom}
          size="icon"
          variant="secondary"
          className="absolute bottom-[110px] right-4 shadow-lg rounded-full w-10 h-10 z-10"
        >
          <ArrowDown className="w-4 h-4" />
        </Button>
      )}

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-gray-200 bg-white flex gap-2">
        <Button
          onClick={handleWhatsAppClick}
          variant="outline"
          size="sm"
          className="flex-1 text-xs border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
        >
          <i className="fab fa-whatsapp mr-1"></i>
          WhatsApp
        </Button>
        <Button
          onClick={handleCallClick}
          variant="outline"
          size="sm"
          className="flex-1 text-xs border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white"
        >
          <Phone className="w-3 h-3 mr-1" />
          Anrufen
        </Button>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
        {queuedMessages.length > 0 && (
          <div className="text-xs text-gray-500 mb-2">
            {queuedMessages.length} {queuedMessages.length === 1 ? 'Nachricht' : 'Nachrichten'} werden im Anschluss gesendet
          </div>
        )}
        <div className="flex gap-2">
          <Textarea
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nachricht eingeben..."
            className="flex-1 min-h-[44px] max-h-[100px] resize-none"
          />
          <Button
            onClick={handleSend}
            disabled={!inputMessage.trim()}
            className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white h-[44px] w-[44px] p-0"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
