import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./todo-reducer/reducer";
import { thunk, ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { TodoAction, TodoState } from "./todo-reducer/action-type";

export interface RootState {
  todo: TodoState;
}

const rootReducer = combineReducers<RootState>({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const thunkMiddleware: ThunkMiddleware<AppState, TodoAction> =
  thunk as ThunkMiddleware<AppState, TodoAction>;

export const store = legacy_createStore<AppState, TodoAction>(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export type AppDispatch = ThunkDispatch<RootState, void, TodoAction>;
