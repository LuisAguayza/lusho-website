import styled from "styled-components";
import * as themeConfig from "theme";

export const Container = styled.div`
  --cero: 0px;
  background-color: ${themeConfig.backgroundColor};
  margin: --cero;
  transition: all 0.25s ease;
`;