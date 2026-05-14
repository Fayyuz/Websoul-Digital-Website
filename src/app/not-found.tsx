
'use client'

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#FAFAFA'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '2.5rem'
      }}>
        <div style={{ width: '2rem', height: '1px', backgroundColor: '#1A1A1A', opacity: 0.1 }}></div>
        <span style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#64748B' }}>Operational Error 404</span>
      </div>
      
      <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 600, color: '#1A1A1A', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
        Resource not found.
      </h1>
      
      <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '400px', marginBottom: '4rem', lineHeight: 1.6 }}>
        The requested operational path could not be resolved. It may have been moved, renamed, or is currently restricted.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Link 
          href="/" 
          style={{
            padding: '0.75rem 2.5rem',
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
            textDecoration: 'none',
            borderRadius: '9999px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '1rem'
          }}
        >
          Return to HQ
        </Link>
        <Link 
          href="/contact" 
          style={{
            padding: '0.75rem 2.5rem',
            border: '2px solid #1A1A1A',
            color: '#1A1A1A',
            textDecoration: 'none',
            borderRadius: '9999px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '1rem'
          }}
        >
          Contact Advisory
        </Link>
      </div>
    </div>
  );
}
