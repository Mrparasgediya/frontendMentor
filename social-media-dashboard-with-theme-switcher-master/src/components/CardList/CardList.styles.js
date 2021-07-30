import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
