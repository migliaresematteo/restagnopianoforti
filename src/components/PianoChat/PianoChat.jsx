import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Close, ChatBubble, Person, Piano } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { pianos } from '../../data/pianos';
import './PianoChat.css';

const PianoChat = ({ onStateChange }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Ciao! Sono il tuo assistente virtuale per i pianoforti. Come posso aiutarti oggi?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server error:', errorData);
        throw new Error(`Server error: ${response.status} ${errorData}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Mi dispiace, si è verificato un errore di connessione. Per favore, riprova tra qualche minuto o contatta l\'assistenza se il problema persiste.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onStateChange?.(newIsOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    onStateChange?.(false);
  };

  const formatMessageWithPianoLinks = (content) => {
    // First, remove any standalone numbers that might appear after piano links
    const cleanContent = content.replace(/\[\[PIANO_ID:\d+\]\]\s*\d+/g, match => match.split('\n')[0]);
    
    const parts = cleanContent.split(/(\[\[PIANO_ID:(\d+)\]\])/);
    return parts.map((part, index) => {
      const match = part.match(/\[\[PIANO_ID:(\d+)\]\]/);
      if (match) {
        const pianoId = parseInt(match[1], 10);
        const piano = pianos.find(p => p.id === pianoId);
        if (!piano) return null;
        
        return (
          <button
            key={index}
            className="piano-link-button"
            onClick={() => navigate(`/pianoforti/${pianoId}`)}
          >
            <Piano fontSize="small" />
            {piano.model}
          </button>
        );
      }
      return <span key={index}>{part}</span>;
    }).filter(Boolean);
  };

  return (
    <>
      <motion.div
        className="chat-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        <ChatBubble />
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="chat-popup"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
            >
              Hai domande sui pianoforti? Chiedimi pure!
              <div className="chat-popup-arrow"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chat-header">
              <div className="chat-title">
                <ChatBubble />
                <span>Assistente Pianoforti</span>
              </div>
              <motion.button
                className="close-button"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Close />
              </motion.button>
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-icon">
                    {message.role === 'assistant' ? <ChatBubble /> : <Person />}
                  </div>
                  <div className="message-content">
                    {formatMessageWithPianoLinks(message.content)}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="message assistant">
                  <div className="message-icon">
                    <ChatBubble />
                  </div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Fai una domanda sui pianoforti..."
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PianoChat;
