import { useRef, useState } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipBubble = styled.div`
  position: fixed;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.titleAlternative};
  color: ${({ theme }) => theme.color.primary};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  opacity: 1;
  transition: opacity 1s ease !important;
`;
interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export const Tooltip = ({ label, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({
        top: rect.top - 35,
        left: rect.left + rect.width / 2,
      });
    }
    setVisible(true);
  };

  const handleMouseLeave = () => setVisible(false);

  return (
    <>
      <Wrapper
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Wrapper>
      {visible && (
        <TooltipBubble style={{ top: coords.top, left: coords.left }}>
          {label}
        </TooltipBubble>
      )}
    </>
  );
};