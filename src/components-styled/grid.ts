import styled, { BreakpoinyKey, Breakpoint, css, Direction, Responsive } from 'styled-components';

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

type BreakpointKeyType = keyof Breakpoint;
const breakpoints: BreakpointKeyType[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

const resolveResponsive = <T,>(
  prop: Responsive<T> | T | undefined,
  cb: (value: T, breakpoint?: BreakpoinyKey) => ReturnType<typeof css>
) => {
  if (!prop) return '';

  if (typeof prop !== 'object' || prop === null) {
    return cb(prop as T);
  }

  // Type guard to check if prop is a Record<Breakpoint, T>
  const isBreakpointRecord = (obj: any): obj is Partial<Record<BreakpoinyKey, T>> =>
    breakpoints.some(key => Object.prototype.hasOwnProperty.call(obj, key));

  if (!isBreakpointRecord(prop)) {
    return cb(prop as T);
  }

  return css`
    ${prop.sm !== undefined && css`
      ${cb(prop.sm, 'sm')}
    `}
    ${prop.md !== undefined && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        ${cb(prop.md, 'md')}
      }
    `}
    ${prop.lg !== undefined && css`
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        ${cb(prop.lg, 'lg')}
      }
    `}
  `;
};

export const Grid = styled.div
.withConfig({
  shouldForwardProp: prop => !gridProps.includes(prop as keyof GridProps)
})
<GridProps>`
  box-sizing: border-box;

  ${({ container }) =>
    container &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}

  ${({ container, spacing = 'sm', theme }) =>
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
`;
