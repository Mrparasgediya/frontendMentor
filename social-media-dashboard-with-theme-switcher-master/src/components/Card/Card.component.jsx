import React from "react";
import * as S from "./Card.styles";

const getConvertedNo = (no) => (no >= 10000 ? `${no / 1000}k` : no);

function Card({ data, isOverviewCard }) {
  const { Icon, color, followers, username, today, count, rate, text } = data;
  const progressCount = isOverviewCard ? rate : today.followers;
  const parsedProgressCount = getConvertedNo(progressCount);
  const isPositiveProgress = progressCount >= 0;
  const mainCountingNo = isOverviewCard ? count : followers;
  const stringifiedMainCountingNo = getConvertedNo(mainCountingNo);

  return (
    <S.Card isOverviewCard={isOverviewCard} borderColor={color}>
      <S.CardContainer isOverviewCard={isOverviewCard}>
        <S.IconAndUsernameContainer isOverviewCard={isOverviewCard}>
          <Icon style={{ height: "2rem", width: "2rem" }} />
          {
            <S.Username isOverviewCard={isOverviewCard}>
              {isOverviewCard ? text : `@${username}`}
            </S.Username>
          }
        </S.IconAndUsernameContainer>
        <S.FollowersAndProgressContainer isOverviewCard={isOverviewCard}>
          <S.FollowersCountContainer>
            <S.FollowersCount isOverviewCard={isOverviewCard}>
              {stringifiedMainCountingNo}
            </S.FollowersCount>
            {!isOverviewCard && (
              <S.FollowerCountText>followers</S.FollowerCountText>
            )}
          </S.FollowersCountContainer>
          <S.ProgressConainer isPositiveProgress={isPositiveProgress}>
            {isPositiveProgress ? <S.ProgressUpIcon /> : <S.ProgressDownIcon />}
            <S.ProgressText>
              {Math.abs(parsedProgressCount)}
              {isOverviewCard ? "%" : " Today"}
            </S.ProgressText>
          </S.ProgressConainer>
        </S.FollowersAndProgressContainer>
      </S.CardContainer>
    </S.Card>
  );
}

export default Card;
