import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import ChatWindow from './ChatWindow';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'chatbot_opened');
    }
  };

  return (
    <>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      
      <Button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white shadow-lg z-[1000] md:flex hidden items-center justify-center p-0 transition-all duration-300 hover:scale-110"
        aria-label="Chat öffnen"
      >
        <MessageCircle className={`w-7 h-7 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </Button>
    </>
  );
};

export default ChatBubble;
