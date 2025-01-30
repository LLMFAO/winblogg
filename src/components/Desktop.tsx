import React from 'react';
import { DesktopIcon, Window } from '../types';
import { desktopIcons } from '../data/icons';
import WindowComponent from './Window';
import DesktopIconComponent from './DesktopIcon';
import StartMenu from './StartMenu';
import { useWindowManager } from '../hooks/useWindowManager';
import { useWindowSize } from '../hooks/useWindowSize';

export default function Desktop() {
  const {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    bringToFront
  } = useWindowManager();
  
  const { isMobile } = useWindowSize();

  return (
    <div 
      className="h-screen w-screen overflow-hidden relative p-4 pb-16 md:p-8 md:pb-16"
      style={{
        background: 'linear-gradient(135deg, var(--retro-bg) 50%, var(--retro-cream) 50%)'
      }}
    >
      <div className="grid grid-cols-6 gap-4 md:gap-8 h-full">
        <div className="col-span-1 space-y-2">
          {desktopIcons.map(icon => (
            <DesktopIconComponent
              key={icon.id}
              icon={icon}
              onOpen={openWindow}
            />
          ))}
        </div>
        
        {windows.map(window => (
          <WindowComponent
            key={window.id}
            window={window}
            onClose={closeWindow}
            onFocus={bringToFront}
            isActive={activeWindow === window.id}
          />
        ))}
      </div>
      <StartMenu />
    </div>
  );
}
