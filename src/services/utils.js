import * as R from "ramda";
import { typeInterpolation } from "styled-components";
import { BREAKPOINTS } from "./../consts/devices";
import { css } from "./../theme/index";

const SIZES = {
  desktop: { min: BREAKPOINTS.MOBILE },
  mobile: { max: BREAKPOINTS.MOBILE - 1 }
};

const LIMITS_MAP: Map<typeof SIZES, () => string> = R.map(
  (limits: any) =>
    [
      limits.min && `(min-width: ${limits.min}px)`,
      limits.max && `(max-width: ${limits.max}px)`
    ]
      .filter(Boolean)
      .join(" and "),
  SIZES
);

export const mq = R.map(
  query => (...args) => css`
    @media ${query} {
      ${css(...args)};
    }
  `,
  LIMITS_MAP
);
