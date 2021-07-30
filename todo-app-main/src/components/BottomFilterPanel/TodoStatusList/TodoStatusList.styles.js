import styled from "styled-components";

export const TodoStatusList = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
