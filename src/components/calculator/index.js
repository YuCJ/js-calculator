import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Panel from './panel';
import Draggable from '../draggable';
import { style as styleConstants } from '../../constants';

const MobilePositioner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(474 / 274) * 360}px;
  max-height: 50%;
  overflow-y: auto;
  box-sizing: border-box;
`;

function getViewportWidth() {
  let width = 0;
  if (
    typeof document !== 'undefined' &&
    document.documentElement &&
    document.documentElement.clientWidth
  ) {
    width = document.documentElement.clientWidth;
  } else if (typeof window !== 'undefined' && window.innerWidth) {
    width = window.innerWidth;
  }
  return width;
}

export default function Calculator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const calculatorNode = useRef(null);

  // Close the calculator when clicked outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !calculatorNode.current ||
        !calculatorNode.current.contains(e.target)
      ) {
        setIsVisible(false);
      }
    };
    if (isVisible) {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [isVisible]);

  // Handle RWD
  useEffect(() => {
    setMobile(getViewportWidth() <= styleConstants.breakpoints.mobileMaxWidth);
    const handleResize = () => {
      setMobile(
        getViewportWidth() <= styleConstants.breakpoints.mobileMaxWidth
      );
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        小算盤
      </button>
      {!isVisible ? null : isMobile ? (
        <MobilePositioner ref={calculatorNode}>
          <Panel />
        </MobilePositioner>
      ) : (
        <Draggable ref={calculatorNode}>
          <Panel />
        </Draggable>
      )}
    </>
  );
}
