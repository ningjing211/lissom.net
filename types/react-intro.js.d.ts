// types/react-intro.js.d.ts
declare module 'react-intro.js' {
  import { Component } from 'react';
  import { StepsOptions } from 'intro.js';

  export interface Step {
    element: string;
    intro: string;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'bottom-left-aligned' | 'bottom-middle-aligned' | 'bottom-right-aligned' | 'auto';
    tooltipClass?: string;
    highlightClass?: string;
    // Add other properties as needed
  }

  export interface StepsProps {
    enabled: boolean;
    steps: Step[];
    initialStep: number;
    onExit: () => void;
    options?: StepsOptions;
  }

  export class Steps extends Component<StepsProps> {}
}
