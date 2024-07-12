import { TodoAction, TodoActionType, TodoState } from "./action-type";

const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const todoReducer = (state : TodoState = initState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TodoActionType.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TodoActionType.GET_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload,
      };
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case TodoActionType.TOGGLE_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
