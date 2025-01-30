import { DesktopIcon } from '../types';

export const desktopIcons: DesktopIcon[] = [
  {
    id: 'about',
    title: 'About Me',
    icon: 'User',
    content: {
      title: 'About Me',
      component: 'about'
    }
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: 'FolderKanban',
    content: {
      title: 'My Projects',
      component: 'projects'
    }
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: 'Mail',
    content: {
      title: 'Contact Me',
      component: 'contact'
    }
  },
  {
    id: 'apps',
    title: 'Apps I Know',
    icon: 'AppWindow',
    content: {
      title: 'Professional Apps',
      component: 'apps'
    }
  }
];
