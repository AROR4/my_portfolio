import React from 'react';
import './resumepage.css'; 

const Resume = () => {
  return (
    <div className="scrollab py-10 px-10 my-12">
       <div className='heading font-roboto font-bold font-large'>
       <span className='heading-1 font-roboto font-bold font-large'>RESUME</span>
    </div>
      <div className="download-button-container">
        <a href="/resume.pdf" download>
          <button className="download-button">Download CV</button>
        </a>
      </div>
      <div className="image-container">
        <img
          src="/resume.png" 
          alt="Resume"
          className="image"
        />
      </div>
      <div className="download-button-container">
        <a href="/resume.pdf" download>
          <button className="download-button">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
