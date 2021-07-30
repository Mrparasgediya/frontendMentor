import React, { useContext, useRef } from "react";
import * as S from "./AddTodoForm.styles";
import { TodoContext } from "contexts/todo/todo.context";
import CircleIcon from "components/CircleIcon/CircleIcon.component";

function AddTodoForm() {
  const todoInputRef = useRef();
  const { todosActions } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    todosActions.addTodo(todoInputRef.current.value);
    todoInputRef.current.value = "";
  };

  return (
    <S.AddTodoForm onSubmit={handleSubmit}>
      <CircleIcon disabled />
      <S.Input
        type="text"
        ref={todoInputRef}
        placeholder="Create a new todo..."
      />
    </S.AddTodoForm>
  );
}

export default AddTodoForm;
