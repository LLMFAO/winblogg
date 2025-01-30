import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function About() {
  const { isMobile } = useWindowSize();
  
  return (
    <div className="prose max-w-none">
      <h2 className={`${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'}`}>About Me</h2>
      <img
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
        alt="Portfolio"
        className={`${
          isMobile ? 'float-none w-full mb-4' : 'float-right ml-4 mb-4 w-48'
        } rounded-lg`}
      />
      <p className={`${isMobile ? 'text-sm' : 'text-base'}`}>
        I'm a passionate developer with expertise in modern web technologies.
        My journey in software development started with a curiosity about how
        things work on the web, and has evolved into a professional career
        building innovative solutions.
      </p>
      <h3 className={`${isMobile ? 'text-lg mt-3 mb-2' : 'text-xl mt-4 mb-3'}`}>Skills</h3>
      <ul className={`${isMobile ? 'text-sm pl-4' : 'pl-5'}`}>
        <li>Frontend Development (React, TypeScript, Tailwind)</li>
        <li>Backend Development (Node.js, Python)</li>
        <li>Cloud Services (AWS, Azure)</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
}
