"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Ensure this path is correct!
import { ErrorBoundary } from "next/dist/client/components/error-boundary"; // Custom Error Boundary

const experience = {
  icon: <Briefcase size={24} />,
  title: "My Experience",
  description: "My 3 years of work in the industry.",
  items: [
    {
      Company: "Sports Media Inc.",
      Location: "Denver, Colorado",
      Duration: "06/2024 - 08/2024",
      Role: "Team Lead AI/Website/SEO Development",
    },
    {
      Company: "Ajex Studios",
      Location: "New Delhi, India",
      Duration: "01/2023 - 08/2023",
      Role: "Data Analyst",
    },
    {
      Company: "Avasha Beauty",
      Location: "Bhopal, India",
      Duration: "06/2023 - 07/2023",
      Role: "Data Analyst",
    },
  ],
};

const education = {
  icon: <GraduationCap size={24} />,
  title: "Education",
  description: "My academic background and achievements.",
  items: [
    {
      Institution: "Virginia Tech",
      Degree: "Computer Science Specialization in Data-Centric Computing",
      Duration: 'August 2022 - May 2026',
      Awards: 'Deans List Fall 2024',
      GPA: '3.5/4.0'
    },
  ],
};

const about = {
  title: "About Me",
  description: "Skills Acquired: Java, Object-oriented Programming, DSA, HTML, C, Tailwind CSS, JavaScript, RISC-V, Machine Learning, Python, Node.js, React.js, Data Analysis, Leadership, Communication",
  info: [
    { fieldName: "Name", fieldValue: "Svastik Arora" },
    { fieldName: "Phone Number", fieldValue: "+1 5402302447" },
    { fieldName: "Email", fieldValue: "svastik@vt.edu" },
    { fieldName: "Experience", fieldValue: "3 years" },
    { fieldName: "Nationality", fieldValue: "South Asian" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const Resume = () => {
  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            {/* Tabs List with glowing hover effects */}
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:max-w-none xl:w-auto gap-6">
              <TabsTrigger
                value="experience"
                className="transition-all hover:scale-110 hover:text-blue-500 hover:shadow-xl hover:shadow-blue-500/50 transform-gpu hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="transition-all hover:scale-110 hover:text-blue-500 hover:shadow-xl hover:shadow-blue-500/50 transform-gpu hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="transition-all hover:scale-110 hover:text-blue-500 hover:shadow-xl hover:shadow-blue-500/50 transform-gpu hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                About Me
              </TabsTrigger>
            </TabsList>

            {/* Tabs Content */}
            <div className="min-h-[70vh] w-full">
              {/* Experience Tab */}
              <TabsContent value="experience">
                <motion.h2
                  className="text-3xl font-bold mb-4 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {experience.title}
                </motion.h2>
                <motion.p
                  className="text-l font-semibold mb-4 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {experience.description}
                </motion.p>
                <div className="mb-6" />
                <motion.ul
                  className="list-disc pl-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {experience.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="mb-6 hover:scale-105 transition-all ease-in-out duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <strong className="text-blue-600">{item.Company}</strong> ({item.Location})
                      <br />
                      Role: {item.Role}
                      <br />
                      Duration: {item.Duration}
                    </motion.li>
                  ))}
                </motion.ul>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <motion.h2
                  className="text-3xl font-bold mb-4 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {education.title}
                </motion.h2>
                <motion.p
                  className="text-l font-semibold mb-4 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {education.description}
                </motion.p>
                <div className="mb-6" />
                <motion.ul
                  className="list-disc pl-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {education.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="mb-6 hover:scale-105 transition-all ease-in-out duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <strong className="text-blue-600">{item.Institution}</strong>
                      <br />
                      Degree: {item.Degree}
                      <br />
                      Duration: {item.Duration}
                      <br />
                      Awards: {item.Awards}
                      <br />
                      GPA: {item.GPA}
                    </motion.li>
                  ))}
                </motion.ul>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent value="about">
                <motion.h2
                  className="text-3xl font-bold mb-4 text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {about.title}
                </motion.h2>
                <motion.p
                  className="text-l font-semibold mb-4 text-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  {about.description}
                </motion.p>
                <div className="mb-6" />
                <motion.ul
                  className="list-disc pl-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {about.info.map((infoItem, index) => (
                    <motion.li
                      key={index}
                      className="mb-4 hover:scale-105 transition-all ease-in-out duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <strong className="text-blue-600">{infoItem.fieldName}:</strong> {infoItem.fieldValue}
                    </motion.li>
                  ))}
                </motion.ul>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default Resume;
