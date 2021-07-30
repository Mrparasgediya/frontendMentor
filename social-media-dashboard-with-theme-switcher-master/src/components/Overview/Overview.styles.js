import styled from "styled-components";

export const Overview = styled.div`
  margin-top: 5.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;

export const OverviewHeading = styled.h2`
  color: ${({ theme }) => theme.text.heading};
`;
