import React from 'react'
import { 
    FaBirthdayCake, 
    FaGlobe, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaGraduationCap, 
    FaEnvelope, 
  } from 'react-icons/fa';
  import { FaNodeJs, FaReact, FaJava, FaPython ,FaGithub, FaAndroid} from "react-icons/fa";
  import { SiFlutter, SiFirebase, SiMongodb, SiJavascript, SiMysql, SiPostman, SiVercel } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { VscVscode } from "react-icons/vsc";
import LeetCodeCalendar from 'leetcode-calendar';
import './aboutpage.css'

const skills = [
    { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "C++", icon: <CgCPlusPlus className="text-blue-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
  ];

  const tools = [
    { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
    { name: "VS Code", icon: <VscVscode  className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Android Studio", icon: <FaAndroid className="text-green-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-yellow-500" /> },
  ];


const aboutpage = () => {
    const exampleTheme = {
  light: [
    'rgb(235, 235, 235)', // Light background color (remains unchanged)
    'rgba(0, 255, 0, 0.44)', // Bright green shade 1
    'rgba(0, 255, 0, 0.6)',  // Bright green shade 2
    'rgba(0, 255, 0, 0.76)', // Bright green shade 3
    'rgba(0, 255, 0, 0.92)', // Bright green shade 4
  ],
  dark: [
    'rgb(235, 235, 235)', // Light background color (remains unchanged)
    'rgba(0, 200, 0, 0.44)', // Bright green shade 1 (dark theme)
    'rgba(0, 200, 0, 0.6)',  // Bright green shade 2
    'rgba(0, 200, 0, 0.76)', // Bright green shade 3
    'rgba(0, 200, 0, 0.92)', // Bright green shade 4
  ],
}

  
  return (
    <div className='scrollable py-10 px-10 my-12'>

      <div className='heading font-roboto font-bold font-large'>
        <span className='heading-1 font-roboto font-bold font-large'>ABOUT</span> 
    </div>

    <div className='about-content '>
    <div className='heading-2'>
        FULL STACK DEVELOPER
    </div>
    <p >  
    Hi, I’m Raghav Arora, a Full Stack Developer who loves building applications that are both useful and easy to use. With a strong foundation in computer science, I enjoy solving problems and bringing ideas to life through technology.</p>

<p>I have experience working with tools and frameworks like Flutter, NodeJs, ReactJs, and more, which help me create modern, efficient, and scalable solutions. I’m always curious to learn new things and stay updated with the latest trends in web development, which keeps my work fresh and exciting.</p>

<p>I enjoy working with teams where everyone collaborates to achieve great results. My communication skills and ability to adapt make it easy for me to work with different people and deliver projects on time. I take pride in owning my work and ensuring that the end result is something I’m proud of.</p>

<p>Apart from coding, I believe in continuous learning and always look for ways to improve my skills. I’m passionate about taking on challenges that push me to grow and finding opportunities to make a meaningful impact through my work.</p>
<p>I’m looking forward to new projects, meeting like-minded people, and contributing to the field of web development in any way I can.
    </p>
    </div>
    <section className=" py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex items-center gap-4 colorgrid p-6 colorgrid rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaBirthdayCake className="text-yellow-400 text-3xl" />
            <div>
              <h3 className="font-bold">Birthday</h3>
              <p>26 August 2004</p>
            </div>
          </div>
          <div className="flex items-center gap-4 colorgrid p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaGlobe className="text-blue-400 text-3xl" />
            <div>
              <h3 className="font-bold">Website</h3>
              <a href="http://www.agarwalvaibhav.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                www.raghavarora.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 colorgrid p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaPhone className="text-green-400 text-3xl" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>+91 7988720509</p>
            </div>
          </div>
          <div className="flex items-center gap-4 colorgrid p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaMapMarkerAlt className="text-red-400 text-3xl" />
            <div>
              <h3 className="font-bold">City</h3>
              <p>Sonipat → Chennai</p>
            </div>
          </div>
          <div className="flex items-center gap-4 colorgrid p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaGraduationCap className="text-purple-400 text-3xl" />
            <div>
              <h3 className="font-bold">Degree</h3>
              <p>BTech CSE '2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 colorgrid p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaEnvelope className="text-orange-400 text-3xl" />
            <div>
              <h3 className="font-bold">Email</h3>
              <a href="mailto:raghavarora9899@gmail.com" className="text-blue-400 hover:underline">
                raghavarora9899@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className=" text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Professional Skillset</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 colorgrid rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Tools I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 colorgrid rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-3">{tool.icon}</div>
            <p className="text-lg font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
    <h2 className="text-3xl font-bold text-center mb-8">Days I <span className='text-green-600'>LeetCode</span></h2>
      <LeetCodeCalendar
        username='raghavarora9899' // Replace with your LeetCode username
        blockSize={15} // Optional: Size of each block in pixels (default: 15)
        blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
        fontSize={16} // Optional: Font size of the text within blocks (default: 16)
        theme={exampleTheme} // Optional: A custom theme object to style the calendar
        style={{ maxWidth: '1100px' }} // Optional: Inline styles for the calendar container
      />
    </div>
    </div>
  )
}

export default aboutpage
