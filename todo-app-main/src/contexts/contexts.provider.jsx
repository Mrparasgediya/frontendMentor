import React from "react";
import TodoProvider from "./todo/todo.context";
import ThemeProvider from "./theme/theme.context";
import DragAndDropProvider from "./dragAndDrop/dragAndDrop.context";

function Provider({ children }) {
  return (
    <ThemeProvider>
      <DragAndDropProvider>
        <TodoProvider>{children}</TodoProvider>
      </DragAndDropProvider>
    </ThemeProvider>
  );
}

export default Provider;
