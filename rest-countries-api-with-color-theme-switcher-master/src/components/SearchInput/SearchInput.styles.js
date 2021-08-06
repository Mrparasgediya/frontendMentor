import styled from "styled-components";
import { ReactComponent as IconSearch } from "assets/icons/search.svg";
import {
  borderRadius,
  boxShadow,
  display,
  flex,
} from "assets/styles/utilities";
import colors from "assets/styles/colors";

export const SearchInput = styled.div`
  height: 5.6rem;
  width: 48rem;
  max-width: 100%;
  padding: 0 3rem;
  background-color: ${colors.white};
  ${display.flex};
  ${flex.items.center};
  ${borderRadius.default};
  ${boxShadow.default};
  gap: 2.4rem;
`;

export const SearchIcon = styled(IconSearch)`
  height: 1.8rem;
  width: 1.8rem;
  fill: ${colors.gray.dark};
`;

export const Label = styled.label`
  flex: 1;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: inherit;
  font-family: inherit;

  &:active,
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: inherit;
    font-family: inherit;
    color: ${colors.gray.dark};
  }
`;
