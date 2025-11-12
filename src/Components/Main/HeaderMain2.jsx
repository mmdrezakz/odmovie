import React from 'react';

export default function HeaderMain2({ onMediaTypeChange, activeMediaType }) {
  const options = [
    { label: 'فیلم', value: 'movie' },
    { label: 'سریال', value: 'tv' },
  ];

  return (
    <div className="flex justify-start items-center gap-5 mt-10 mr-8 mb-5">
      <p className="pr-2 border-r-2">رایگان</p>
      <div className="flex items-center gap-4 text-sm">
        {options.map(({ label, value }) => {
          const isActive = value === activeMediaType;
          return (
            <button
              key={value}
              onClick={() => onMediaTypeChange(value)}
              className={`px-3 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-yellow-400 text-slate-900 font-bold'
                  : 'text-yellow-400 hover:text-white hover:font-bold'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}