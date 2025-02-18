import React from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import Socials from '@/components/socials';
import Photo from '@/components/photo';
import Stats from '@/components/stats';

const Home = () => {
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/svastik-arora-81647721b/",
    };

    const email = "svastik@vt.edu";
    const phoneNumber = "+15402302447";

    return (
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Left Section */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer / AI Scientist</span>
                        <h1 className="h1 mb-6">
                            Hello!
                            <br />
                            <span className="text-accent">
                                I'm Svastik Arora <br /> Welcome to my website
                            </span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I thrive in high-pressure environments and grow through hands-on experience. I possess expertise in a range of programming languages and software applications. My testimonials reflect my dedication and work ethic when given the chance. I am eager to collaborate with you and bring my ideas to the table!
                        </p>

                        {/* Button and Socials Section */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            {/* Download Resume Button */}
                            <a
                                href="/resume/Svastik_Arora_CV.pdf" // Corrected path
                                download="Svastik_Arora_CV.pdf" // Suggested filename for download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase flex items-center gap-2 border border-accent px-4 py-2 rounded-lg text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                            >
                                <span>Download Resume</span>
                                <FiDownload className="text-xl" />
                            </a>

                            {/* Social Icons */}
                            <div className="mb-8 xl:mb-0 flex gap-6">
                                <Socials
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                                    links={socialLinks}
                                />

                                {/* Email Icon */}
                                <a
                                    href={`mailto:${email}`}
                                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                                    aria-label="Email Me"
                                >
                                    <FiMail />
                                </a>

                                {/* Phone Icon */}
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                                    aria-label="Call Me"
                                >
                                    <FiPhone />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
                <Stats />
            </div>
        </section>
    );
};

export default Home;
