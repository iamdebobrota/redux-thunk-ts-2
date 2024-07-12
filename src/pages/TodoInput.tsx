import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todo-reducer/action";

const TodoInput = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formdata = new FormData(form);
    const data = {
      title: formdata.get("title") as string,
      status: formdata.get("status") === "true",
    };
    dispatch(addTodo({ payload: data }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter title" />
        <select name="status">
          <option value="">Select the status</option>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoInput;
