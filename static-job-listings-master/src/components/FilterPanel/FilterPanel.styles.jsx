import styled, { css } from "styled-components";
import { colors, borderRadius, shadows, fonts } from "assets/styles/variables";

export const FilterPanelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  min-height: 4.8rem;
  width: 100%;
  border-radius: ${borderRadius.default};
  background-color: ${colors.white};
  box-shadow: ${shadows.default};
  padding: 1.4rem 2.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
    min-height: 8rem;
  }
`;

const clearFilterPanelTextStyles = css`
  border-bottom: 1px solid ${colors.primary};
  margin-left: auto;
  cursor: pointer;
`;

const getFilterPanelTextStyles = (type) => {
  if (type === "clear") return clearFilterPanelTextStyles;
};

export const FilterPanelText = styled.span`
  text-transform: capitalize;
  color: ${colors.primary};
  font-weight: 700;

  ${(props) => getFilterPanelTextStyles(props.type)}

  @media (max-width: 768px) {
    font-size: ${fonts.default};
    color: ${colors.cayanDark};
    border-bottom: none;
  }
`;
