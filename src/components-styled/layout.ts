import styled from "styled-components";
import * as colors from "theme";
import { styles } from "theme";

export const Container = styled.div`
  background-color: ${colors.containerColor};
  transition: all 0.25s ease;
  @media screen and (min-width: ${styles.breakpoints.lg}) {
    margin-right: ${styles.margin.mb3};
    margin-left: ${styles.margin.mb3};
  }
`;

