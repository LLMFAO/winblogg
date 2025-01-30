import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function Contact() {
  const { isMobile } = useWindowSize();
  
  return (
    <div className="space-y-4">
      <h2 className={`${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'} font-bold`}>
        Get in Touch
      </h2>
      
      <div className={`space-y-3 ${isMobile ? 'text-sm' : 'text-base'}`}>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-600" />
          <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
            contact@example.com
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Linkedin className="w-5 h-5 text-gray-600" />
          <a href="#" className="text-blue-600 hover:underline">
            LinkedIn Profile
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Github className="w-5 h-5 text-gray-600" />
          <a href="#" className="text-blue-600 hover:underline">
            GitHub Profile
          </a>
        </div>
      </div>
      
      <form className={`space-y-3 mt-6 ${isMobile ? 'text-sm' : 'text-base'}`}>
        <div>
          <label className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded border-2 border-black p-2"
          />
        </div>
        
        <div>
          <label className="block font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full rounded border-2 border-black p-2"
          />
        </div>
        
        <button
          type="submit"
          className="retro-button w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
