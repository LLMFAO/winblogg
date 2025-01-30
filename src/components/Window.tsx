import React, { useEffect } from 'react';
import { Window as WindowType } from '../types';
import AboutContent from './content/About';
import ProjectsContent from './content/Projects';
import ContactContent from './content/Contact';
import AppsContent from './content/Apps';
import { useWindowSize } from '../hooks/useWindowSize';
import { useDraggable } from '../hooks/useDraggable';

interface Props {
  window: WindowType;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  isActive: boolean;
  onPositionChange?: (id: string, position: { x: number; y: number }) => void;
}

const contentComponents = {
  about: AboutContent,
  projects: ProjectsContent,
  contact: ContactContent,
  apps: AppsContent
};

export default function WindowComponent({ window, onClose, onFocus, isActive, onPositionChange }: Props) {
  const ContentComponent = contentComponents[window.content.component as keyof typeof contentComponents];
  const { isMobile } = useWindowSize();

  const {
    position,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging
  } = useDraggable(window.position, (newPosition) => {
    onPositionChange?.(window.id, newPosition);
  });

  useEffect(() => {
    if (isDragging) {
      // Use globalThis.window instead of window to avoid naming conflict
      globalThis.window.addEventListener('mousemove', handleMouseMove);
      globalThis.window.addEventListener('mouseup', handleMouseUp);
      return () => {
        globalThis.window.removeEventListener('mousemove', handleMouseMove);
        globalThis.window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(window.id);
  };

  return (
    <div
      className={`absolute retro-window ${isDragging ? 'cursor-grabbing select-none' : ''}`}
      style={{
        top: position.y,
        left: position.x,
        width: window.size.width,
        height: window.size.height,
        zIndex: window.zIndex,
      }}
      onClick={() => onFocus(window.id)}
      onMouseDown={handleMouseDown}
    >
      <div className="retro-window-title flex items-center cursor-grab">
        <button 
          className="w-3 h-3 rounded-full bg-black mr-2 hover:bg-gray-700 transition-colors"
          onClick={handleClose}
        />
        <h3 className="text-sm font-medium">{window.title}</h3>
      </div>
      <div className={`${isMobile ? 'p-4' : 'p-6'} h-[calc(100%-32px)] overflow-auto bg-white`}>
        <div className="window-content">
          {ContentComponent && <ContentComponent />}
        </div>
      </div>
    </div>
  );
}
