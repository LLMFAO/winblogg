import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="relative">
      <button 
        onClick={() => setShowCalendly(true)} 
        className="text-xs md:text-sm font-medium hover:bg-[var(--button-bg)] p-1 rounded"
      >
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <div>{timeFormatter.format(time)}</div>
        </div>
        <div>{dateFormatter.format(time)}</div>
      </button>

      {showCalendly && (
        <>
          <div 
            className="fixed inset-0 bg-black/20" 
            onClick={() => setShowCalendly(false)}
          />
          <div className="absolute bottom-[calc(100%+8px)] right-0 w-[320px] md:w-[480px] bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg">
            <div className="border-b-2 border-black p-3 flex justify-between items-center bg-[var(--button-bg)]">
              <h3 className="font-bold">Schedule a Meeting</h3>
              <button 
                onClick={() => setShowCalendly(false)}
                className="hover:bg-black/10 rounded p-1"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Select a time to schedule your meeting</p>
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <button
                      key={i}
                      className="retro-button text-sm py-2"
                    >
                      {new Date(time.getTime() + (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Note: This is a mock calendar. Calendly integration coming soon.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
