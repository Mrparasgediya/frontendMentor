import React from "react";
import TodoStatus from "../TodoStatus/TodoStatus.component";
import withSeperateContainer from "../withSeperateContainer/withSeperateContainer.component";
import * as S from "./TodoStatusList.styles";

function TodoStatusList() {
  const validStatus = ["all", "active", "completed"];
  return (
    <S.TodoStatusList>
      {validStatus.map((status, idx) => (
        <TodoStatus status={status} key={idx} />
      ))}
    </S.TodoStatusList>
  );
}

export default withSeperateContainer(TodoStatusList);
