import { css } from "styled-components";

export const display = {
  flex: "display:flex",
};

export const flex = {
  items: {
    center: "align-items:center",
    start: "align-items:flex-start",
  },
  justify: {
    center: "justify-content:center",
    between: "justify-content:space-between",
  },
  direction: {
    col: "flex-direction:column",
  },
  wrap: {
    wrap: "flex-wrap: wrap",
  },
};

export const container = {
  lg: css`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: inherit;
    @media (max-width: 768px) {
      width: 90%;
    }
  `,
};

export const boxShadow = {
  default: (theme) =>
    `box-shadow: 0px 2px 1rem 0px  ${theme.colors.elements.shadow} `,
};

export const borderRadius = {
  default: "border-radius: 5px",
};
