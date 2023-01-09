import styled from "styled-components";
import * as colors from "theme";
import { styles } from "theme";

export const Container = styled.div`
  background-color: ${colors.containerColor};
  color: ${colors.textColor};
  transition: all 0.25s ease;
  margin-right: ${styles.margin.mb3};
  margin-left: ${styles.margin.mb3};
  @media screen and (max-width: ${styles.breakpoints.lg}) {
    margin-right: ${styles.margin.mb15};
    margin-left: ${styles.margin.mb15};
  }
  @media screen and (max-width: ${styles.breakpoints.xs}) {
    margin-right: ${styles.margin.mb1};
    margin-left: ${styles.margin.mb1};
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
`;

