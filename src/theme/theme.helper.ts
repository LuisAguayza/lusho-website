import { Breakpoint, Responsive, BreakpoinyKey, css, BreakpointBoolean } from "styled-components";

type BreakpointKeyType = keyof Breakpoint;
export const breakpoints: BreakpointKeyType[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const resolveResponsive = <T,>(
  prop: Responsive<T> | T | undefined,
  cb: (value: T, breakpoint?: BreakpoinyKey) => ReturnType<typeof css>
) => {
  if (!prop) return '';

  if (typeof prop !== 'object' || prop === null) {
    return cb(prop as T);
  }

  const isBreakpointRecord = (obj: any): obj is Partial<Record<BreakpoinyKey, T>> =>
    breakpoints.some(key => Object.prototype.hasOwnProperty.call(obj, key));

  if (!isBreakpointRecord(prop)) {
    return cb(prop as T);
  }

  return css`
    ${prop.sm !== undefined && css`${cb(prop.sm, 'sm')}`}
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

export const responsiveBooleanStyle = (
  propName: string,
  config: BreakpointBoolean,
  theme: any,
  valueCSS: string = '100%'
) => {
  const mediaQueries: any[] = [];
  let currentValue: boolean | undefined;

  for (const bp of breakpoints) {
    if (config[bp] !== undefined) currentValue = config[bp];

    if (currentValue === true) {
      if (bp === 'xs') {
        mediaQueries.push(css`
          @media (max-width: ${theme.breakpoints.sm}) {
            ${`${propName}: ${valueCSS};`}
          }
        `);
      } else {
        mediaQueries.push(css`
          @media (min-width: ${theme.breakpoints[bp]}) {
            ${`${propName}: ${valueCSS};`}
          }
        `);
      }
    } else if (currentValue === false) {
      mediaQueries.push(css`
        @media (min-width: ${theme.breakpoints[bp]}) {
          ${propName}: auto;
        }
      `);
    }
  }

  return mediaQueries;
};