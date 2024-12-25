import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './projectpage.css'

// Sample project data
const projects = [
  {
    title: 'Vidhik Sahayta (Legal Aid)',
    description:[
        'A web application for legal aid, where users can find and book lawyers for their cases.',
        'Easy Login & Registration with Client side validations.',
        'Developed a custom search bar to find service providers using filters such as lawyer type, case type, and required services.',
        'Integrated a chat feature for real-time communication between users and legal service providers.',

    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/AROR4/legal_ease',
    image: 'assets/garbage.jpeg', 
  },
  {
    title: 'E-Commerce App',
    description: ['Developed a full-stack e-commerce application with distinct admin and customer components.',
        'Implemented user authentication and authorization using JWT Authentication.',
        'Developed a custom search bar to find products using filters such as price, brand, and type.',
    'Implemented features for product purchase, order tracking, inventory management, and product listing.'],
    tech: ['Flutter', 'MongoDB', 'Express.js', 'Node.js','JWT Authentication'],
    link: 'https://github.com/AROR4/amazon_clone_server',
    image: 'path_to_image_2.jpg', 
  },
  
  {
    title: "Covid-19 Tracker-APIBasedAnalysisApp",
    "description": [
      "Developed a COVID-19 Tracker with API-based analysis, providing real-time updates and insights on the pandemic.",
      "The app featured comprehensive data visualization and tracking capabilities.",
    ],
    "tech": [
      "Flutter",
      "Dart",
      "Rest APIs"
    ],
    link: "https://github.com/AROR4/https://github.com/AROR4/covid19_tracker_by_api.ai",
    image: '',
    
  },
  {
    title: "Smart Bin Locator",
    "description": [
        "Developed a Smart Bin Locator application to help users find the nearest waste disposal bins.",
        "The app featured a user-friendly interface, real-time location tracking, and bin status updates.",
    ],
    "tech": [
      "Flutter",
      "Dart",
      "Rest APIs"
    ],
    link: "https://github.com/thedevyash/garbage_locator",
    image: 'assets/garbage.jpeg',
    
  },
  
  

];

const ProjectCard = ({ title, description, tech, link, image }) => {
  return (
    <div className=" colorgrid flex flex-col sm:flex-row gap-10 rounded-lg shadow-lg mb-8 p-6">
      <img className="w-full sm:w-1/3 rounded-lg object-cover" src={image} alt={title} />
      <div className="sm:ml-6 mt-4 sm:mt-0">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className='px-4'>

        <ul className="mb-2 list-disc">
        {description.map((item, index) => (
            <li key={index} className="text-lg text-white px-2 py-1 rounded-lg font-sans">
            {item}
            </li>
        ))}
        </ul>
        </div>
        <div className="mt-4">
          <ul className="flex flex-wrap gap-3 mt-2">
            {tech.map((item, index) => (
              <li key={index} className="text-sm bg-gray-800 text-white px-2 rounded-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 transition"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Visit Repository
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects page component
const ProjectsPage = () => {
  return (
    <div className=" scrollable py-20 my-12">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
      <div className='heading font-roboto font-bold font-large py-1'>
      <span className='heading-1 font-roboto font-bold font-large'>PROJECTS</span>
    </div>
        <div className="text-white space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
