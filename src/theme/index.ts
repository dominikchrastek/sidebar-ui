import * as styledComponents from "styled-components";

const baseFont = 16;
const baseLineScale = 1.5;
const baseLine = baseFont * baseLineScale;

export const color = {
  primary: "#e74c3c",
  red1: "#cd3728",
  red2: "#b5281a",
  red3: "#a52215",
  white: "#fff",
  gray1: "#d5d5d5",
  gray2: "#434343",
  gray3: "#d5d5d5",
  gray4: "#f6f6f6",
  gray5: "#b3b3b3",
  gray6: "#ededed",
  gray7: "#818181",
  gray8: "#dfdfdf"
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
