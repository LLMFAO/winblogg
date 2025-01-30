import React, { useState } from 'react';
import { Github, Linkedin, Twitter, X } from 'lucide-react';
import Clock from './Clock';

export default function StartMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-[var(--window-bg)] border-t-2 border-black p-2 flex items-center justify-between">
        <button 
          className="retro-button flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hidden md:inline">Start</span>
          {isOpen ? <X size={16} /> : <span>☰</span>}
        </button>

        <Clock />
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-transparent"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-[calc(100%-2px)] left-0 w-48 bg-[var(--window-bg)] border-2 border-black rounded-t-lg overflow-hidden">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-[var(--button-bg)] border-b border-black last:border-b-0"
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
