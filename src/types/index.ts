export interface DesktopIcon {
  id: string;
  title: string;
  icon: string;
  content: WindowContent;
}

export interface WindowContent {
  title: string;
  component: string;
}

export interface Window {
  id: string;
  title: string;
  content: WindowContent;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}
