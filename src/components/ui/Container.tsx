'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}
