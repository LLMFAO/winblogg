import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function Projects() {
  const { isMobile } = useWindowSize();
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform for business metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-4'}`}>
      {projects.map((project, index) => (
        <div key={index} className="border-2 border-black rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-36 object-cover border-b-2 border-black"
          />
          <div className={`p-3 ${isMobile ? 'space-y-1' : 'space-y-2'}`}>
            <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold`}>
              {project.title}
            </h3>
            <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
