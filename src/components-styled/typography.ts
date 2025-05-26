import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.h1};
  }
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.h2};
  }
`;

export const SubSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.h3};
  }
`;

export const CardTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.normal};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.normal};
  }
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.typography.small};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.small};
  }
`;

export const TableHeader = styled.h6`
  font-size: ${({ theme }) => theme.typography.smaller};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.smaller};
  }
`;

export const Body1 = styled.p`
  font-size: ${({ theme }) => theme.typography.normal};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.normal};
  }
`;

export const Body2 = styled.span`
  font-size: ${({ theme }) => theme.typography.small};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.small};
  }
`;

export const Caption = styled.small`
  font-size: ${({ theme }) => theme.typography.smaller};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.responsive.smaller};
  }
`;

export const Overline = styled.span`
  font-size: ${({ theme }) => theme.typography.tiny};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

