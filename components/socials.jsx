import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Socials = ({ iconStyles, links }) => {
    return (
        <>
            {links.linkedin && (
                <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyles}
                >
                    <FaLinkedin />
                </a>
            )}
        </>
    );
};

export default Socials;
