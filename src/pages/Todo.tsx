import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getTodoData } from "../redux/todo-reducer/action";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const Todo = () => {
  const { isLoading, isError, todos } = useSelector(
    (state: RootState) => state.todo
  );
  const dispath: AppDispatch = useDispatch();

  useEffect(() => {
    dispath(getTodoData());
  }, []);
  
  console.log(todos);

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput />
      <div>
        {isLoading ? (
          <h4>Loading....</h4>
        ) : isError ? (
          <h5>Something went wrong...</h5>
        ) : null}
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todo;
