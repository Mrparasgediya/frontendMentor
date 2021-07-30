import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.light};

  @media (max-width: 768px) {
    margin-top: 13.25rem;
  }
`;
