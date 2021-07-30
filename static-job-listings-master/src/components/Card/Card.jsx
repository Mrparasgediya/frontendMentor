import React from "react";
import * as S from "./Card.styles";
import TagList from "components/TagList/TagList";

function Card({ job, onTagClick }) {
  const {
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
    featured,
  } = job;
  return (
    <S.Card isFeatured={featured}>
      <S.CardLogo src={logo} alt="company-logo" />
      <S.CardContentContainer>
        <S.CardBody>
          <S.CardHeader>
            <S.CardHeaderText>{company}</S.CardHeaderText>
            {job.new && <S.CardHeaderBadge type="new">NEW!</S.CardHeaderBadge>}
            {featured && (
              <S.CardHeaderBadge type="featured">FEATURED</S.CardHeaderBadge>
            )}
          </S.CardHeader>
          <S.CardBodyHeading>{position}</S.CardBodyHeading>
          <S.CardBodyList>
            <S.CardBodyListItem>{postedAt}</S.CardBodyListItem>
            <S.CardBodyListItem>{contract}</S.CardBodyListItem>
            <S.CardBodyListItem>{location}</S.CardBodyListItem>
          </S.CardBodyList>
        </S.CardBody>
        <S.CardSeperatorLine />
        <TagList
          onItemClick={onTagClick}
          tags={[role, level, ...languages, ...tools]}
        />
      </S.CardContentContainer>
    </S.Card>
  );
}

export default Card;
