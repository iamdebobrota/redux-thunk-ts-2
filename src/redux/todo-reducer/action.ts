import axios from "axios";
import { TodoAction, TodoActionType, TodoType } from "./action-type";
import { AppDispatch } from "../store"; // Ensure the correct path is used for the import

const url = "http://localhost:8080/todos";

export const getTodoAction = (payload: TodoType[]): TodoAction => ({
  type: TodoActionType.GET_TODO,
  payload,
});

export const loadingTodoAction = (): TodoAction => ({
  type: TodoActionType.LOADING,
});

export const errorTodoAction = (): TodoAction => ({
  type: TodoActionType.ERROR,
});

export const addTodoAction = (): TodoAction => ({
  type: TodoActionType.ADD_TODO,
});

export const toggleTodoAction = (id: number): TodoAction => ({
  type: TodoActionType.TOGGLE_TODO,
  payload: id,
});

export const getTodoData = () => (dispatch: AppDispatch): void => {
    dispatch(loadingTodoAction());
    axios
      .get(url)
      .then((res) => {
        dispatch(getTodoAction(res.data as TodoType[]));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorTodoAction());
      });
  };

export const addTodo = ({ payload }: { payload: TodoType }) => (dispatch: AppDispatch) => {
    dispatch(loadingTodoAction());
    axios
      .post(url, payload)
      .then((res) => {
        dispatch(addTodoAction());
        console.log(res.data);
        // Call getTodoData after adding a todo
        dispatch(getTodoData());
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorTodoAction());
      });
  };
