import React from "react";
import * as S from "./Container.styles";

function Container({ children }) {
  return <S.Container>{children}</S.Container>;
}

export default Container;
