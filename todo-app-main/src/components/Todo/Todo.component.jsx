import React, { useContext, useState } from "react";
import * as S from "./Todo.styles";
import CircleIcon from "components/CircleIcon/CircleIcon.component";
import { TodoContext } from "contexts/todo/todo.context";
import { DragAndDropContext } from "contexts/dragAndDrop/dragAndDrop.context";

function Todo({ todo }) {
  const { todosActions } = useContext(TodoContext);
  const { dragAndDropState, dragAndDropActions } =
    useContext(DragAndDropContext);

  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.effetcAllowed = "move";
    dragAndDropActions.setItemToMove(todo.id);
    setIsDragging(true);
  };

  const handleDragEnter = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  };

  const handleDrop = (e) => {
    setIsDraggingOver(false);
    dragAndDropActions.setOnDroppedItem(todo.id);
    dragAndDropActions.setItemIsDropped();
  };

  return (
    <S.Todo
      draggable
      isDraggingOver={isDraggingOver && dragAndDropState.itemToMove !== todo.id}
      isDragging={isDragging}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <CircleIcon
        isCompleted={todo.completed}
        toggleComplete={() => todosActions.toggleCompleteTodo(todo.id)}
      />
      <S.TodoText isCompleted={todo.completed}>{todo.text}</S.TodoText>
      <S.CloseIconButton onClick={() => todosActions.removeTodo(todo.id)}>
        <S.CloseIcon />
      </S.CloseIconButton>
    </S.Todo>
  );
}

export default Todo;
