import React, { useContext } from "react";
import * as S from "./TodoList.styles";
import Todo from "components/Todo/Todo.component";
import BottomFilterPanel from "components/BottomFilterPanel/BottomFilterPanel.component";
import { TodoContext } from "contexts/todo/todo.context";

function TodoList() {
  const { todosState } = useContext(TodoContext);

  return (
    <S.TodoList>
      {todosState.currentTodosIds.map((todoId) => (
        <Todo key={todoId} todo={{ id: todoId, ...todosState.todos[todoId] }} />
      ))}
      <BottomFilterPanel />
    </S.TodoList>
  );
}

export default TodoList;
