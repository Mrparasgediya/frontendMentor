import styled, { css } from "styled-components";
import { colors, fonts } from "assets/styles/variables";

export const TagList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2.6rem;
    flex-wrap: wrap;
  }
`;

const removeTagListItemStyles = css`
  padding-right: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const defaultTagListItemStyles = css`
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.cayanLightTables};
  }
`;

const getTagListItemStyles = (type) => {
  if (type === "remove") return removeTagListItemStyles;
  return defaultTagListItemStyles;
};

export const TagListItem = styled.li`
  cursor: pointer;
  padding: 0 0.6rem;
  height: 2rem;
  border-radius: 5px;
  background-color: ${colors.cayanLightTables};
  font-weight: 700;
  color: ${colors.primary};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1.2rem;
    height: 4.6rem;
    font-size: ${fonts.default};
    padding-right: 0 1.2rem;
  }

  ${(props) => getTagListItemStyles(props.type)}
`;
