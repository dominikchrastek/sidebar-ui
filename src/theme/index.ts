import * as styledComponents from "styled-components";

const baseFont = 16;
const baseLineScale = 1.5;
const baseLine = baseFont * baseLineScale;

export const color = {
  primary: "#e74c3c",
  white: "#fff",
  gray1: "#d5d5d5",
  gray3: "#d5d5d5",
  gray2: "#434343",
  gray4: "#f6f6f6"
};

export const theme = {
  baseFont,
  baseLine,
  baseLineScale,
  color
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
