import React from 'react';
import * as Icons from 'lucide-react';
import { apps } from '../../data/apps';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function AppsContent() {
  const { isMobile } = useWindowSize();
  
  return (
    <div className="space-y-6">
      <h2 className={`${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'} font-bold`}>
        Professional Creative Suite
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {apps.map((app, index) => {
          const IconComponent = Icons[app.icon as keyof typeof Icons];
          
          return (
            <div 
              key={index}
              className="border-2 border-black rounded-lg p-4 bg-[var(--button-bg)] hover:bg-[#d5e5e5] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-black rounded bg-white p-1.5 flex-shrink-0">
                  <IconComponent className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-bold">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                  <span className="inline-block mt-1 text-xs bg-black text-white px-2 py-0.5 rounded">
                    {app.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
