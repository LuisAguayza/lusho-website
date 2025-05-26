import styled, { BreakpoinyKey, Breakpoint, css, Direction, Responsive } from 'styled-components';
import { breakpoints, resolveResponsive } from 'theme';

const TOTAL_COLS = 12;

type GridProps = {
  container?: boolean;
  item?: boolean;
  spacing?: Responsive<BreakpoinyKey>;
  direction?: Responsive<Direction>;
  col?: Responsive<number>;
}

type GridPropKey = keyof GridProps;
const gridProps: GridPropKey[] = [
  'container',
  'item',
  'spacing',
  'direction',
  'col'
];

export const Grid = styled.div
  .withConfig({
    shouldForwardProp: prop => !gridProps.includes(prop as GridPropKey)
  })<GridProps>`
  box-sizing: border-box;

  ${({ container }) =>
    container &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}

  ${({ container, spacing = 'xs', theme }) =>
    container &&
    resolveResponsive(spacing as BreakpoinyKey, (sp: keyof typeof theme.spacing) => css`
      gap: ${theme.spacing[sp]};
    `)}

  ${({ container, direction = 'row' }) =>
    container &&
    resolveResponsive(direction, (dir) => css`
      flex-direction: ${dir};
    `)}

  ${({ item, col }) =>
    item &&
    resolveResponsive(col, (value) => {
      const width = (value / TOTAL_COLS) * 100;
      return css`
        flex: 0 0 ${width}%;
        max-width: ${width}%;
      `;
    })}

  ${({ item, direction }) =>
    item &&
    direction &&
    resolveResponsive(direction, (dir) => css`
      display: flex;
      flex-direction: ${dir};
    `)}

  ${({ item, spacing = 'xs', direction = 'row', theme }) =>
  item &&
  breakpoints.map((bp) => {
    const dir = typeof direction === 'object' ? direction[bp] : direction;
    const sp = typeof spacing === 'object' ? spacing[bp] : spacing;

    if (!dir || !sp || !theme.spacing[sp as keyof typeof theme.spacing]) return null;

    const spacingValue = theme.spacing[sp as keyof typeof theme.spacing];
    const cssRule = dir === 'column'
      ? css`row-gap: ${spacingValue};`
      : css`column-gap: ${spacingValue};`;

    if (bp === 'xs') return css`
      @media (min-width: ${theme.breakpoints.xs}) {
        ${cssRule}
      }
    `;

    if (bp === 'sm') return css`
      @media (min-width: ${theme.breakpoints.sm}) {
        ${cssRule}
      }
    `;

    if (bp === 'md') return css`
      @media (min-width: ${theme.breakpoints.md}) {
        ${cssRule}
      }
    `;
    if (bp === 'lg') return css`
      @media (min-width: ${theme.breakpoints.lg}) {
        ${cssRule}
      }
    `;
    if (bp === 'xl') return css`
      @media (min-width: ${theme.breakpoints.xl}) {
        ${cssRule}
      }
    `;
    return null;
  })}
`;
