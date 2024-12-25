import React from 'react'
import './contactpage.css'
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaInstagram
  } from "react-icons/fa";

  import {SiLeetcode} from "react-icons/si" ;

const contactpage = () => {


  
  return (
    <div className='scrollable py-10 px-10 my-12 '>

      <div className='heading '>
      <span className='heading-1 font-roboto font-bold font-large'>CONTACT</span>
    </div>
    <div className="container flex flex-wrap">
      <div className="contact-info">
        <div className=" colorgrid card">
          <span className='card-heading'>Email</span>
          <p className='card-content'>raghavarora9899@gmail.com</p>
        </div>
        <div className=" colorgrid card">
        <span className='card-heading'>Phone</span>
        <p className='card-content'>+91 7988720509</p>
        </div>
        
      </div>

      <div className='contact-info '>

      <div className=" card colorgrid">
      <span className='card-heading'>My Socials</span>
      
                 <div className='social-icons-1 '>
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
    <div className=" colorgrid card">
    <span className='card-heading'>Address</span>
    <p className='card-content'>Sonipat, Haryana 131001</p>
    </div>
    </div>
    <div>
      </div>
    
    </div>
    <form className="contact-form">
        <div className="form-group ">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            required
            placeholder="Message"
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  )
}

export default contactpage
