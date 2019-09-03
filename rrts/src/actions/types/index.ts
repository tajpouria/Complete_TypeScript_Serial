import { FetchTodoAction, DeleteTodoAction } from "../../actions";

export enum ActionTypes {
    FETCH_TODOS,
    DeleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction;
