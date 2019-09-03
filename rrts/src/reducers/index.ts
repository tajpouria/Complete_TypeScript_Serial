import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { Todo } from "../actions";

export interface StoreState {
    todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
    todos: todoReducer
});
