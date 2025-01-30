import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function WindowControls({ onClose }: Props) {
  return (
    <div className="flex space-x-1 mr-1">
      <button className="retro-button w-4 h-4 p-0">
        <Square className="w-2 h-2" />
      </button>
      <button className="retro-button w-4 h-4 p-0">
        <Minus className="w-2 h-2" />
      </button>
      <button 
        className="retro-button w-4 h-4 p-0"
        onClick={onClose}
      >
        <X className="w-2 h-2" />
      </button>
    </div>
  );
}
