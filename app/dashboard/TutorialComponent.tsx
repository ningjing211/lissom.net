"use client";

import React, { useEffect, useRef } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css'; // Default theme
import 'intro.js/themes/introjs-modern.css'; // Dark theme

// 手动定义 Step 类型
type Step = {
  element: string;
  intro: string;
  position?: 'right' | 'left' | 'bottom' | 'top';
};

const steps: Step[] = [
  {
    element: '#header',
    intro: 'This is the header section',
  },
  {
    element: '#main-content',
    intro: 'This is the main content section',
  },
  {
    element: '#footer',
    intro: 'This is the footer section',
  },
  {
    element: '#nav-item-1',
    intro: 'This is the first item in the navigation',
    position: 'right',
  },
];

const TutorialComponent: React.FC = () => {
  const intro = useRef<any>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      intro.current = introJs();
      intro.current.setOptions({ steps });
      intro.current.start();
    }
  }, []);

  return (
    <div>
      <header id="header">
        <nav>
          <ul>
            <li id="nav-item-1">Nav Item 1</li>
            <li>Nav Item 2</li>
            <li>Nav Item 3</li>
          </ul>
        </nav>
      </header>
      <main id="main-content">
        <h1>Main Content</h1>
      </main>
      <footer id="footer">
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default TutorialComponent;
