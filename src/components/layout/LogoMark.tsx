import React from 'react';

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export const LogoMark = ({ className = "", inverse = false }: LogoProps) => (
  <div className={`flex items-center gap-3 ${className}`} id="brand-logo">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Premium Minimalist Architectural Mark */}
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect 
          x="4" y="4" width="32" height="32" 
          stroke={inverse ? "white" : "#0A0A0F"} 
          strokeWidth="1.5" 
        />
        <path 
          d="M4 20H36" 
          stroke={inverse ? "white" : "#0A0A0F"} 
          strokeWidth="0.5" 
          strokeDasharray="2 2"
          className="opacity-30"
        />
        <path 
          d="M20 4V36" 
          stroke={inverse ? "white" : "#0A0A0F"} 
          strokeWidth="0.5" 
          strokeDasharray="2 2"
          className="opacity-30"
        />
        <path 
          d="M10 20L20 10L30 20L20 30L10 20Z" 
          stroke={inverse ? "white" : "#0A0A0F"} 
          strokeWidth="2.5" 
          strokeLinejoin="miter"
        />
        <rect 
          x="18" y="18" width="4" height="4" 
          fill={inverse ? "white" : "#0A0A0F"} 
        />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-space font-medium tracking-tight ${inverse ? 'text-white' : 'text-[#0A0A0F]'} leading-tight`}>
        Websoul
      </span>
      <span className={`text-[10px] font-sans font-bold uppercase tracking-[0.4em] ${inverse ? 'text-slate-400' : 'text-slate-500'} leading-none -mt-0.5`}>
        Digital
      </span>
    </div>
  </div>
);
