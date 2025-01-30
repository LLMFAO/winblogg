import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function About() {
  const { isMobile } = useWindowSize();
  
  return (
    <div className="prose max-w-none">
      <h2 className={`${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'}`}>About Me</h2>
      <iframe
        src="https://tourmaline-hyena-e46.notion.site/About-Me-18bf7428bd1e805594b2ec05ce44d438?pvs=74"
        title="About Me"
        className={`${
          isMobile ? 'w-full h-96' : 'w-full h-[600px]'
        } rounded-lg border-0`}
        allowFullScreen
      />
    </div>
  );
}
