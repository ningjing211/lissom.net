declare module 'reactour' {
  import * as React from 'react';

  export interface TourProps {
    steps: Array<{ selector: string; content: React.ReactNode }>;
    isOpen: boolean;
    onRequestClose: () => void;
    startAt?: number;
    maskClassName?: string;
    highlightedMaskClassName?: string;
    className?: string;
    accentColor?: string;
    disableInteraction?: boolean;
    disableKeyboardNavigation?: boolean;
    inViewThreshold?: number;
    scrollDuration?: number;
    showNumber?: boolean;
    showNavigation?: boolean;
    showNavigationNumber?: boolean;
    showButtons?: boolean;
    lastStepNextButton?: React.ReactNode;
    nextButton?: React.ReactNode;
    prevButton?: React.ReactNode;
    closeButton?: React.ReactNode;
    rounded?: number;
    onAfterOpen?: (target: HTMLElement) => void;
    onBeforeClose?: (target: HTMLElement) => void;
  }

  const Tour: React.FC<TourProps>;

  export default Tour;
}
