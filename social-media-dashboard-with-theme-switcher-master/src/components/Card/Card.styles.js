import styled, { css } from "styled-components";
import { colors } from "assets/styles/variables";
import { ReactComponent as UpIcon } from "assets/images/icon-up.svg";
import { ReactComponent as DownIcon } from "assets/images/icon-down.svg";

const defaultCardStyle = css`
  position: relative;
  width: 100%;
  height: 21.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background: ${({ borderColor }) => borderColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const overviewCardStyle = css`
  height: 12.5rem;
  min-width: 22.5rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.components.card.bg};
  ${(props) => (props.isOverviewCard ? overviewCardStyle : defaultCardStyle)}
`;

const defaultCardContainerStylescss = css`
  gap: 3rem;
`;
const overviewCardContainerStyles = css`
  height: 80%;
  width: 80%;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.isOverviewCard
      ? overviewCardContainerStyles
      : defaultCardContainerStylescss}
`;

const overviewIconAndUsernameContainerStyles = css`
  width: 100%;
  justify-content: space-between;
`;

export const IconAndUsernameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${(props) => props.isOverviewCard && overviewIconAndUsernameContainerStyles}
`;

const overviewUserNameStyles = css`
  order: -1;
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.text.default};
  font-weight: 700;
  ${(props) => props.isOverviewCard && overviewUserNameStyles}
`;

export const FollowersCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FollowersCount = styled.h2`
  font-size: ${(props) => (props.isOverviewCard ? "2.4rem" : "4.2rem")};
  color: ${({ theme }) => theme.text.heading};
`;

export const FollowerCountText = styled.span`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.default};
`;

export const ProgressConainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ isPositiveProgress }) =>
    isPositiveProgress ? colors.primary.limeGreen : colors.primary.brightRed};
`;

export const ProgressUpIcon = styled(UpIcon)`
  color: ${colors.primary.limeGreen};
`;

export const ProgressDownIcon = styled(DownIcon)`
  color: ${colors.primary.brightRed};
`;

export const ProgressText = styled.span`
  font-weight: 700;
`;

const defaultFollowersAndProgressContainerStyles = css`
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;
const overviewFollowersAndProgressContainerStyles = css`
  justify-content: space-between;
  width: 100%;
`;

export const FollowersAndProgressContainer = styled.div`
  display: flex;

  ${(props) =>
    props.isOverviewCard
      ? overviewFollowersAndProgressContainerStyles
      : defaultFollowersAndProgressContainerStyles}
`;
