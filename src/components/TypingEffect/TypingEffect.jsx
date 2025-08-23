import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, eraseSpeed = 50, typingDelay = 500, eraseDelay = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < text[currentIndex].length) {
        const timer = setTimeout(() => {
          setDisplayText(text[currentIndex].slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, eraseDelay);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, eraseSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
          setIsTyping(true);
        }, typingDelay);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, currentIndex, isTyping, text, speed, eraseSpeed, typingDelay, eraseDelay]);

  return (
    <span className="text-[#8245ec]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
