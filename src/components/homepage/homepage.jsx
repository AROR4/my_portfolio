import React, { useState, useEffect } from "react";
import "./Homepage.css";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

import {SiLeetcode} from "react-icons/si" ;

const Homepage = () => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);


  const texts = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "App Developer",
  ];
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = texts[wordIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50); 
      } else {
        setCurrentText((prev) => currentWord.slice(0, charIndex + 1));
        setTypingSpeed(150); 
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      } else {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, texts, wordIndex, charIndex, typingSpeed]);

  return (
    <section  id="homepage">
      <div className="mx-20 my-10 p-20 h-10 w-full">
      </div>
      <div className="intro-content px-20 mx-20 py-10 my-10 ">
        <span className="name " >
          Raghav Arora
        </span>
        <div className="typing-container font-white "><span className="tagline font-white">I'm a passionate </span><span className="animate">{currentText}</span></div>
        
        <div className="social-icons-1 my-5">
           <div className=" icon-cover rounded-full bg-gray-700  px-2.5 py-2.5">
                           <a
                             href="https://leetcode.com/u/raghavarora9899/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <SiLeetcode className="icon" />
                           </a>
                             </div> 
                             <div className="icon-cover rounded-full bg-gray-700  px-2.5 py-2.5">
                 
                           <a
                             href="www.linkedin.com/in/raghav-arora-470928261"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaLinkedin className="icon" />
                           </a>
                           </div>
                           <div className=" icon-cover rounded-full bg-gray-700  px-2.5 py-2.5">
                           <a
                             href="https://github.com/AROR4"
                             target="_blank"
                             
                             rel="noopener noreferrer"
                             >
                             <FaGithub className="icon" />
                           </a>
                             </div>
                             <div className="icon-cover rounded-full bg-gray-700  px-2.5 py-2.5">
                           <a
                             href="https://www.instagram.com/raghavarora9899/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaInstagram className="icon" />
                           </a>
                           </div>
                           <div className="icon-cover rounded-full bg-gray-700  px-2.5 py-2.5">
                           <a
                             href="https://x.com/a09807230_arora"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaTwitter className="icon" />
                           </a>
                           </div>
        </div>
      </div>
    </section>
    
  );
};

export default Homepage;
