import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const reset = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    /* font-smoothing: antialiased; 에러뜸 */
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }
`;
