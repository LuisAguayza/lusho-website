import styled from "styled-components";

export const Typography = styled.h1`
  color: ${({ theme }) => theme.color.title};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  transition: all .5s linear
`;
