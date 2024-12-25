import React, { useState, useEffect } from 'react';
import './App.css';

const TypingEffect = () => {
  const [text, setText] = useState('I am passionate');

  useEffect(() => {
    const typingTexts = [
      'I am passionate',
      'Full Stack Developer',
      'Tech Enthusiast',
      'App Developer',
    ];

    let index = 0;
    const interval = setInterval(() => {
      setText(typingTexts[index]);
      index += 1;
      if (index >= typingTexts.length) {
        clearInterval(interval);
      }
    }, 3000); // Change text every 3 seconds
  }, []);

  return (
    <div className="typing-container">
      {text}
    </div>
  );
};

export default TypingEffect;
