import colors from "assets/styles/colors";
import styled, { css } from "styled-components";

const checkedIconStyles = css`
  background: ${colors.gradient.circle};
`;

export const InnerCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.circle.inner};
  height: 90%;
  width: 90%;
  border-radius: inherit;
`;

const defaultCircleIconStyles = css`
  background: ${({ theme }) => theme.colors.border.light};
  cursor: pointer;
  &:hover {
    background: ${colors.gradient.circle};
  }
`;

const getDisabledCircleIconStyles = css`
  cursor: auto;
  &:hover {
    background: ${({ theme }) => theme.colors.border.light};
  }
`;

export const CircleIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => (props.completed ? checkedIconStyles : defaultCircleIconStyles)}
  ${(props) => props.isDisabled && getDisabledCircleIconStyles}
`;
