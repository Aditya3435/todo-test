import * as React from "react";
import "./todo-results.scss";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const {todos} = React.useContext(TodosContext);
  const calculateChecked = () => {
      const count = todos.filter(todo => {
        return todo.checked === true;
      })
      return count.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
