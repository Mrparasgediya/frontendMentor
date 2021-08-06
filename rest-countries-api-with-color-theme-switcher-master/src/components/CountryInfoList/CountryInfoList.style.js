import styled from "styled-components";

export const CountryInfoListContainer = styled.div`
  font-size: ${(props) => (props.fontBig ? "1.4rem" : "1.2rem")};
  @media (max-width: 768px) {
    font-size: ${(props) => (props.fontBig ? "1.5rem" : "1.5rem")};
  }
`;
