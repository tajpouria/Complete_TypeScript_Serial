import { Todo } from "../actions";
import { ActionTypes, Action } from "../actions/types";

export const todoReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return [...state, ...action.payload];
        case ActionTypes.DeleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
};
