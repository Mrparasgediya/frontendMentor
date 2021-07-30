import styled, { css } from "styled-components";

const getSwitchStylesFromTheme = ({ theme }) => {
  const {
    components: { themeSwitch },
  } = theme;
  return css`
    background: ${themeSwitch.bg};
  `;
};

const getSwitchBallStylesFromTheme = ({ theme }) => {
  const {
    components: { themeSwitch },
  } = theme;
  return css`
    background: ${themeSwitch.ball.bg};
  `;
};

export const ThemeSwitch = styled.div`
  width: 4.8rem;
  height: 2.4rem;
  position: relative;
  border-radius: 5rem;
  ${(props) => getSwitchStylesFromTheme(props)}
`;

export const ThemeSwitchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
`;

export const ThemeSwitchBall = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0.4rem;
  z-index: 0;
  top: 50%;
  transform: translateY(-50%) ${(props) => props.isOn && "translateX(-125%)"};
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  transition: all 0.3s;

  ${(props) => getSwitchBallStylesFromTheme(props)}
`;
