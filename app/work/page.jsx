"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi'; // Import email and phone icons
import Socials from '@/components/socials'; 
import Stats from '@/components/stats'; 

const projects = [
  {
    id: 1,
    title: "Team Lead AI/Website/SEO Development",
    employer: "Sports Media Inc.",
    dates: "June 2024 - August 2024",
    description: "Developed the backend of an AI voice bot effectively using skills such as python, machine learning models like GPT-3 and OpenAI's NLP API. Entrusted with leading a team of 12 developers to spearhead the AI voice bot project from inception to a patentable invention for the company, a critical initiative integral to the company's growth. Achieved this milestone at almost half the cost of industry standard for similar AI services, showcasing leadership and cost efficiency in AI and machine learning development.",
    technologies: ["Python Scrypting", "OpenAI API Integration", "Machine Learning", "NLP's","Secure API key management", "LLM", "Token Optimization", "AI-powered Applications"],
    responsibilities: [
      "Developed backend of AI voice bot using Python and OpenAI's NLP API",
      "Led a team of 12 developers to spearhead the AI voice bot project from inception to a patentable invention",
      "Achieved cost efficiency, delivering project at almost half the cost of industry standard for similar AI services"
    ],
    link: null,
  },
  {
    id: 2,
    title: "Website & SEO Department Leadership",
    employer: "Sports Media Inc.",
    dates: "June 2024 - August 2024",
    description: "Led a 25-member team in the website and SEO department, effectively resolving issues and ensuring timely project delivery, demonstrating strong leadership skills.",
    responsibilities: [
      "Led a 25-member team in the website and SEO department",
      "Resolved issues and ensured timely project delivery",
      "Constantly guided them towards the right track, crucial for timely presentation of work."
    ],
    link: null,
  },
  {
    id: 3,
    title: "Data Analyst",
    employer: "Ajex Studios",
    dates: "January 2023 - August 2023",
    description: "Conducted thorough data analysis of historical sales data to identify key trends, patterns, and correlations. Developed and delivered a comprehensive data report utilizing tools such as Matplotlib, Pandas, Python, Scikit-learn, NumPy, and Microsoft Excel. Applied data analysis techniques to generate actionable insights, providing recommendations that enhanced business efficiency and boosted quarterly sales by $200,000.",
    technologies: ["Matplotlib", "Pandas", "Python", "Scikit-learn", "NumPy", "Microsoft Excel"],
    responsibilities: [
      "Conducted thorough data analysis of historical sales data to identify key trends, patterns, and correlations",
      "Developed and delivered a comprehensive data report utilizing tools such as Matplotlib, Pandas, Python, Scikit-learn, NumPy, and Microsoft Excel",
      "Applied data analysis techniques to generate actionable insights, providing recommendations that enhanced business efficiency and boosted quarterly sales by $200,000"
    ],
    link: null,
  },
  {
    id: 4,
    title: "Data Analyst",
    employer: "Avasha Beauty",
    dates: "June 2023 - July 2023",
    description: "Directed a team of 10 data analysts to perform in-depth market trend analysis, utilizing advanced data analytics techniques such as linear regression, binning, cleaning and matplot to extract actionable insights. Optimized the company's data strategy, driving a 75% improvement in sales and enhancing brand visibility through data-driven decision-making. Presented analysis to the CEO using scatterplots in Jupyter notebooks, highlighting the company's divergence from current market trends and its impact on product sales.",
    technologies: ["Linear Regression", "Data Binning", "Data Cleaning", "Matplotlib", "Jupyter Notebooks"],
    responsibilities: [
      "Directed a team of 10 data analysts to perform in-depth market trend analysis",
      "Optimized the company's data strategy, driving a 75% improvement in sales and enhancing brand visibility",
      "Presented analysis to the CEO using scatterplots in Jupyter notebooks"
    ],
    link: null,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Designed and developed a personal portfolio website to showcase my projects and skills.",
    technologies: ["React", "Framer Motion", "TailwindCSS", "node.js", "Javascript"],
    responsibilities: [
      "Designed a personal portfolio for practicing."
    ],
    link: null,
  },
];

const Work = () => {
  const [expandedCard, setExpandedCard] = useState(null); // Keeps track of the expanded card
  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle the expansion
  };

  // Animation variants for the cards (includes random starting positions for "fly in" effect)
  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: Math.random() * 600 - 300, // Random horizontal start position
      y: Math.random() * 600 - 300, // Random vertical start position
      rotate: Math.random() * 360, // Random rotation angle for fun effect
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: i * 0.3, duration: 1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="min-h-screen bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-accent">My Work</h1>
          <p className="text-accent">
          This section highlights my contributions and achievements during past internships, showcasing the projects I have worked on and the impact I made.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="bg-slate-800 rounded-lg p-6 shadow-lg cursor-pointer flex flex-col"
              onClick={() => toggleCard(project.id)} // Toggle the expansion
            >
              {/* Project Title */}
              <motion.h2 className="text-xl font-semibold mb-2 text-accent">{project.title}</motion.h2>

              {/* Employer and Dates */}
              {(project.employer || project.dates) && (
                <p className="text-gray-500 text-sm mb-3">
                  {project.employer && `${project.employer}, `}
                  {project.dates}
                </p>
              )}

              {/* Project Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Expandable content */}
              {expandedCard === project.id && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {project.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-200 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
