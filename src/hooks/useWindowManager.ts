import { useState } from 'react';
import { Window, DesktopIcon } from '../types';
import { getWindowPosition, getWindowSize } from '../utils/window';
import { useWindowSize } from './useWindowSize';

export function useWindowManager() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(1);
  const { isMobile, windowSize } = useWindowSize();

  const openWindow = (icon: DesktopIcon) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    
    const position = getWindowPosition(isMobile);
    const size = getWindowSize(isMobile, windowSize);
    
    const newWindow: Window = {
      id: icon.id,
      title: icon.content.title,
      content: icon.content,
      isMinimized: false,
      isMaximized: false,
      position,
      size,
      zIndex: newZIndex
    };

    setWindows(prev => [...prev, newWindow]);
    setActiveWindow(icon.id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const bringToFront = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows(prev => 
      prev.map(w => w.id === id ? { ...w, zIndex: newZIndex } : w)
    );
    setActiveWindow(id);
  };

  return {
    windows,
    activeWindow,
    openWindow,
    closeWindow,
    bringToFront
  };
}
