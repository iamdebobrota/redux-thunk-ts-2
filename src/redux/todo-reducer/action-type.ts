export interface TodoType {
  id?: string | number;
  title: string;
  status: boolean;
}

export interface TodoState {
  isLoading: boolean;
  isError: boolean;
  todos: TodoType[];
}

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  GET_TODO = "GET_TODO",
  TOGGLE_TODO = "TOGGLE_TOD",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

interface AddTodoActionType {
  type: TodoActionType.ADD_TODO;
}
interface GetTodoActionType {
  type: TodoActionType.GET_TODO;
  payload: TodoType[];
}
interface ToggleTodoActionType {
  type: TodoActionType.TOGGLE_TODO;
  payload: number;
}

interface LoadingTodoActionType {
  type: TodoActionType.LOADING;
}
interface ErrorTodoActionType {
  type: TodoActionType.ERROR;
}

export type TodoAction =
  | AddTodoActionType
  | GetTodoActionType
  | ToggleTodoActionType
  | LoadingTodoActionType
  | ErrorTodoActionType;
