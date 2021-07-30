import React from "react";
import * as S from "./CardsList.styles";

function CardsList({ children, ...otherProps }) {
  return <S.CardsList {...otherProps}>{children}</S.CardsList>;
}

export default CardsList;
