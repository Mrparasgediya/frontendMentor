import styled, { css } from "styled-components";
import { colors, borderRadius, shadows, fonts } from "assets/styles/variables";

const featuredCardStyles = css`
  border-left: 0.4rem solid ${colors.primary};

  @media (max-width: 768px) {
    border-left: 0.75rem solid ${colors.primary};
  }
`;

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.default};
  padding: 2.2rem 2.8rem;
  min-height: 10.4rem;
  width: 100%;
  display: flex;
  box-shadow: ${shadows.default};

  &:not(:last-child) {
    margin-bottom: 1.8rem;
  }

  ${(props) => props.isFeatured && featuredCardStyles}

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
    padding: 3rem;

    &:not(:last-child) {
      margin-bottom: 6rem;
    }
  }
`;

export const CardLogo = styled.img`
  height: 6rem;
  width: 6rem;
  margin-right: 1.6rem;

  @media (max-width: 768px) {
    height: 7rem;
    width: 7rem;
    position: absolute;
    top: 0;
    left: 5%;
    transform: translateY(-50%);
  }
`;

export const CardContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardSeperatorLine = styled.hr`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 3.2rem 0;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    gap: 2.3rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 768px) {
    margin-top: 1.8rem;
    gap: 1.4rem;
  }
`;

export const CardHeaderText = styled.p`
  font-weight: 700;
  color: ${colors.primary};
  margin-right: 0.6rem;

  @media (max-width: 768px) {
    font-size: ${fonts.default};
  }
`;

const cardHeaderBadgeNewStyles = css`
  background-color: ${colors.primary};
`;

const cardHeaderBadgeFeaturedStyles = css`
  background-color: ${colors.cayanVeryDark};
`;

const getCardHeaderBadgeStyles = (type) => {
  if (type === "new") return cardHeaderBadgeNewStyles;
  if (type === "featured") return cardHeaderBadgeFeaturedStyles;
};

export const CardHeaderBadge = styled.div`
  padding: 0.4rem 0.6rem;
  font-weight: 700;
  font-size: 0.8rem;
  color: ${colors.white};
  border-radius: 50px;

  ${(props) => getCardHeaderBadgeStyles(props.type)}

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`;

export const CardBodyHeading = styled.h3`
  cursor: pointer;
  color: ${colors.cayanVeryDark};
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CardBodyList = styled.ul`
  display: flex;
  gap: 2.4rem;
  color: ${colors.cayanDark};
  font-size: 0.7rem;
  font-weight: 500;

  @media (max-width: 768px) {
    gap: 3.6rem;
    font-size: ${fonts.default};
  }
`;

export const CardBodyListItem = styled.li`
  &:not(:first-child) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -45%;
      transform: translate(50%, -50%);
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${colors.cayanDark};
    }
  }
  @media (max-width: 768px) {
    &:not(:first-child) {
      &::before {
        left: -35%;
      }
    }
  }
`;
