import styled, { css } from "styled-components";
import { colors } from "assets/styles/variables";

const removeCustomButtonStyle = css`
  background-color: ${colors.primary};
  height: 100%;
  width: 2.2rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.cayanVeryDark};
  }

  @media (max-width: 768px) {
    height: 4.6rem;
    width: 4.6rem;
  }
`;

const getButtonStyles = (btnType) => {
  if (btnType === "remove") return removeCustomButtonStyle;
};

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${(props) => getButtonStyles(props.btnType)}
`;
