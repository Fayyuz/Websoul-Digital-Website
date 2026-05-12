import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      'card-premium',
      hover && 'hover:shadow-2xl hover:shadow-slate-100',
      className
    )}>
      {children}
    </div>
  );
}
