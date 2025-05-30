import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const TooltipBubble = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.titleAlternative};
  color: ${({ theme }) => theme.color.primary};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  pointer-events: none;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  opacity: 1;
  transition: opacity 0.2s ease;

  max-width: 300px;
  min-width: 100px;
  width: fit-content;

  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 70vw;
    transform: none;
  }
`;

const scroll = 'scroll';
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
      const tooltipHeight = 40;
      const topAbove = rect.top - tooltipHeight;
      const topBelow = rect.bottom;

      let top = topAbove < 0 ? topBelow : topAbove;
      let left = rect.left + rect.width / 2;

      const screenWidth = window.innerWidth;
      const tooltipMaxWidth = 300;

      if (left - tooltipMaxWidth / 2 < 0) {
        left = tooltipMaxWidth / 2;
      } else if (left + tooltipMaxWidth / 2 > screenWidth) {
        left = screenWidth - tooltipMaxWidth / 2;
      }

      setCoords({ top, left });
      setVisible(true);
    }
  };

  const handleMouseLeave = () => setVisible(false);

  useEffect(() => {
    if (!visible) return;

    const handleScroll = () => setVisible(false);
    window.addEventListener(scroll, handleScroll, true);

    return () => {
      window.removeEventListener(scroll, handleScroll, true);
    };
  }, [visible]);

  return (
    <>
      <Wrapper
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Wrapper>
      {visible &&
        createPortal(
          <TooltipBubble style={{ ...coords }}>{label}</TooltipBubble>,
          document.body
        )}
    </>
  );
};
