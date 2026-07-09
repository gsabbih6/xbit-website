'use client';

import { useEffect } from 'react';

export default function ConsoleEasterEgg() {
  useEffect(() => {
    // Prevent double execution in React 18+ strict mode
    let executed = false;
    if (executed) return;
    
    // Log beautifully formatted ASCII art to console
    console.log(
      `%c
██╗  ██╗██████╗ ██╗████████╗
╚██╗██╔╝██╔══██╗██║╚══██╔══╝
 ╚███╔╝ ██████╔╝██║   ██║   
 ██╔██╗ ██╔══██╗██║   ██║   
██╔╝ ██╗██████╔╝██║   ██║   
╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝   
      `,
      'color: #00f2fe; font-weight: bold; font-family: monospace;'
    );
    console.log(
      '%c[ SYSTEM_ACTIVE ]%c Xbit Innovations - Tech Stack & Custom Software Engineering',
      'color: #00f2fe; font-weight: bold; background: rgba(0,242,254,0.1); padding: 2px 6px; border: 1px solid rgba(0,242,254,0.2);',
      'color: #ffffff; font-weight: bold;'
    );
    console.log(
      '%cWe specialize in high-performance computing, XRP Ledger payment architecture, and computational science systems. Built for the world, born in Arkansas.%c\n\nInterested in custom product development or custom licensing? \n👉 Visit: https://xbitinnovations.com/contact\n👉 Direct: info@xbitinnovations.com',
      'color: oklch(75% 0.01 230);',
      'color: #ffffff; font-weight: 500;'
    );

    return () => {
      executed = true;
    };
  }, []);

  return null;
}
