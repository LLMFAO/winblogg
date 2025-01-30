import React from 'react';
import * as Icons from 'lucide-react';
import { DesktopIcon as DesktopIconType } from '../types';

interface Props {
  icon: DesktopIconType;
  onOpen: (icon: DesktopIconType) => void;
}

export default function DesktopIconComponent({ icon, onOpen }: Props) {
  const IconComponent = Icons[icon.icon as keyof typeof Icons];

  return (
    <div
      className="desktop-icon"
      onClick={() => onOpen(icon)}
      onDoubleClick={() => onOpen(icon)}
    >
      <div className="desktop-icon-box">
        <div className="w-12 h-12 border-2 border-black rounded-lg bg-white p-1.5">
          <IconComponent className="w-full h-full text-black stroke-[1.5]" />
        </div>
      </div>
      <span className="desktop-icon-text">
        {icon.title}
      </span>
    </div>
  );
}
