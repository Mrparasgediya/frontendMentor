import styled from "styled-components";

export const Header = styled.header`
  display: flex;

  @media (min-width: 768px) {
    align-items: center;
    height: 13.6rem;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 24.75rem;
    justify-content: space-around;
    padding: 5rem 0;
  }
`;

export const HeadingContainer = styled.div`
  text-transform: capitalize;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.text.heading};
  font-size: 2.2rem;
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1.75rem;
  }
`;

export const HeadingSubText = styled.span`
  margin-top: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.default};
`;

export const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ThemeSwitchText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.text.default};
`;
