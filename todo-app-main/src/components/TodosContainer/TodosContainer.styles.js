import styled from "styled-components";

export const TodosContainer = styled.div`
  & > * {
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
`;
