import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px)`,
  },
}))`
  display: inline-block;
  cursor: ${(props) => (props.isDragging ? 'grabbing' : 'grab')};
  position: absolute;
  top: 0;
  left: 0;
  user-select: ${(props) => (props.isDragging ? 'none' : 'auto')};
`;

export default React.forwardRef(function Draggable({ children }, ref) {
  const [state, setState] = useState({
    isDragging: false,
    mouseStart: { x: 0, y: 0 },
    origin: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      mouseStart: { x: clientX, y: clientY },
      // Reset origin and translation:
      origin: {
        x: state.origin.x + state.translation.x,
        y: state.origin.y + state.translation.y,
      },
      translation: { x: 0, y: 0 },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      setState((state) => ({
        ...state,
        translation: {
          x: clientX - state.mouseStart.x,
          y: clientY - state.mouseStart.y,
        },
      }));
    },
    [state.mouseStart.x, state.mouseStart.y]
  );

  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Container
      isDragging={state.isDragging}
      x={state.translation.x + state.origin.x}
      y={state.translation.y + state.origin.y}
      onMouseDown={handleMouseDown}
      ref={ref}
    >
      {children}
    </Container>
  );
});
