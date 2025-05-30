import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const width = 400;
const scroll = 'scroll';

const TooltipBubble = styled.div<{ coords: { top: number; left: number } }>`
  position: fixed;
  top: ${({ coords }) => coords.top}px;
  left: ${({ coords }) => coords.left}px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.titleAlternative};
  color: ${({ theme }) => theme.color.primary};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.smaller};
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  white-space: normal;
  text-align: center;
  max-width: ${width}px; /* ← más ancho en desktop */
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  transition: opacity 0.2s ease;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 80vw;
    font-size: ${({ theme }) => theme.typography.tiny};
  }
`;
interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export const Tooltip = ({ label, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handlePosition = () => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (rect) {
      const tooltipWidth = tooltipRef.current?.offsetWidth || width;
      const tooltipHeight = tooltipRef.current?.offsetHeight || 40;

      const screenWidth = window.innerWidth;
      const centerLeft = rect.left + rect.width / 2;

      let left = centerLeft;
      let top = rect.top - tooltipHeight - 8;

      if (centerLeft - tooltipWidth / 2 < 8) {
        left = tooltipWidth / 2 + 8;
      } else if (centerLeft + tooltipWidth / 2 > screenWidth - 8) {
        left = screenWidth - tooltipWidth / 2 - 8;
      }

      if (top < 8) {
        top = rect.bottom + 8;
      }

      setCoords({ top, left });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);
    };
    if (visible) {
      handlePosition();
      window.addEventListener(scroll, handleScroll, { once: true });
    }
    return () => {
      window.removeEventListener(scroll, handleScroll);
    };
  }, [visible]);

  return (
    <>
      <Wrapper
        ref={wrapperRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </Wrapper>
      {visible &&
        createPortal(
          <TooltipBubble ref={tooltipRef} coords={coords}>
            {label}
          </TooltipBubble>,
          document.body
        )}
    </>
  );
};
