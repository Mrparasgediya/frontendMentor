import React, { Fragment, useContext } from "react";
import * as S from "./BottomFilterPanel.styles";
import { TodoContext } from "contexts/todo/todo.context";
import TodoStatusList from "./TodoStatusList/TodoStatusList.component";

function BottomFilterPanel() {
  const { todosState, todosActions } = useContext(TodoContext);
  const notCompletedTodosCount = todosState.todosIds.reduce(
    (completedCount, todoId) =>
      !todosState.todos[todoId].completed
        ? (completedCount += 1)
        : completedCount,
    0
  );

  return (
    <Fragment>
      <S.BottomFilterPanel>
        <S.BottomFilterPanelText>
          {notCompletedTodosCount} items left
        </S.BottomFilterPanelText>
        <TodoStatusList />
        <S.BottomFilterPanelButton onClick={todosActions.clearCompleted}>
          Clear Completed
        </S.BottomFilterPanelButton>
      </S.BottomFilterPanel>
    </Fragment>
  );
}

export default BottomFilterPanel;
