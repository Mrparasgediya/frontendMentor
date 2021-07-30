import React from "react";
import * as S from "./withSeperateContainer.styles.js";

function withSeperateContainer(WrappedComponent) {
  return (props) => {
    return window.innerWidth <= 768 ? (
      <S.SeperateContainer>
        <WrappedComponent />
      </S.SeperateContainer>
    ) : (
      <WrappedComponent />
    );
  };
}

export default withSeperateContainer;
