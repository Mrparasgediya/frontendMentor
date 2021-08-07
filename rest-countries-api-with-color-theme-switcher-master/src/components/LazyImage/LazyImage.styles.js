import colors from "assets/styles/colors";
import styled from "styled-components";

export const LazyImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: center;
  background-color: ${colors.gray.dark};
  @media (max-width: 768px) {
    height: 20.25rem;
  }
`;
