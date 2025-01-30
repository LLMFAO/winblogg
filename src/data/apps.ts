export interface App {
  name: string;
  category: string;
  icon: string;
  description: string;
}

export const apps: App[] = [
  {
    name: 'DaVinci Resolve',
    category: 'Video Editing',
    icon: 'Film',
    description: 'Professional video editing, color grading, and VFX'
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Video Editing',
    icon: 'Video',
    description: 'Industry-standard video editing software'
  },
  {
    name: 'Adobe Lightroom',
    category: 'Photo Editing',
    icon: 'Image',
    description: 'Professional photo editing and organization'
  },
  {
    name: 'Adobe Photoshop',
    category: 'Photo Editing',
    icon: 'ImagePlus',
    description: 'Advanced photo manipulation and design'
  },
  {
    name: 'Adobe After Effects',
    category: 'Motion Graphics',
    icon: 'Sparkles',
    description: 'Motion graphics and visual effects'
  },
  {
    name: 'Figma',
    category: 'Design',
    icon: 'Palette',
    description: 'UI/UX design and prototyping'
  },
  {
    name: 'Canva',
    category: 'Design',
    icon: 'PenTool',
    description: 'Quick graphic design and social media content'
  },
  {
    name: 'Final Cut Pro',
    category: 'Video Editing',
    icon: 'Scissors',
    description: 'Professional video editing for Mac'
  }
];
