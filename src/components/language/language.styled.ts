import styled from "styled-components";

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const LangLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
`;

export const LangIcon = styled.i`
  display: block;
  font-size: ${({ theme }) => theme.typography.h2};
`;