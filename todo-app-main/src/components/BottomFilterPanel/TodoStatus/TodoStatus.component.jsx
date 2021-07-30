import React, { useContext } from "react";
import * as S from "./TodoStatus.styles";
import { TodoContext } from "contexts/todo/todo.context";

function TodoStatus({ status }) {
  const { todosState, todosActions } = useContext(TodoContext);
  return (
    <S.TodoStatus
      isActive={todosState.currentFilter === status}
      onClick={
        todosState.todosIds.length > 0
          ? () => todosActions.changeFilter(status.toLowerCase())
          : null
      }
    >
      {status}
    </S.TodoStatus>
  );
}

export default TodoStatus;
