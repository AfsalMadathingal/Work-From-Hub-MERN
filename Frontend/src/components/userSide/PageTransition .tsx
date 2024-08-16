// src/components/GlobalTransitionWrapper.tsx
import React, { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionWrapper.css'; // Import the CSS file for transitions

interface GlobalTransitionWrapperProps {
  children: ReactNode;
}

const GlobalTransitionWrapper: React.FC<GlobalTransitionWrapperProps> = ({ children }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300} 
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default GlobalTransitionWrapper;
