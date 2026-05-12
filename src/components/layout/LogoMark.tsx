import React from 'react';

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export const LogoMark = ({ className = "", inverse = false }: LogoProps) => (
  <div className={`flex items-center gap-4 ${className}`} id="brand-logo">
    <div className={`relative w-12 h-12 flex items-center justify-center`}>
      {/* Custom Geometric Mark: Representing Structural Integrity and Digital Flow */}
      <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M4 12V36H44V12H4Z" 
          stroke={inverse ? "white" : "#050B16"} 
          strokeWidth="1.5" 
        />
        <path 
          d="M12 24L20 16L28 24L36 32" 
          stroke={inverse ? "white" : "#050B16"} 
          strokeWidth="2.5" 
          strokeLinecap="square"
        />
        <rect 
          x="18" y="14" width="12" height="20" 
          stroke={inverse ? "white" : "#050B16"} 
          strokeWidth="1" 
          className="opacity-20"
        />
        <circle 
          cx="24" cy="24" r="2" 
          fill={inverse ? "white" : "#050B16"} 
        />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-black tracking-tight ${inverse ? 'text-white' : 'text-[#050B16]'} leading-none uppercase`}>
        Websoul
      </span>
      <span className={`text-[10px] uppercase tracking-[0.4em] font-bold ${inverse ? 'text-slate-400' : 'text-slate-500'}`}>
        Digital
      </span>
    </div>
  </div>
);
