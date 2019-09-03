import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";
import { ActionTypes } from "./types";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodoAction {
    type: ActionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.DeleteTodo;
    payload: number;
}

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
    const response: AxiosResponse = await axios.get<Todo[]>(URL);

    dispatch<FetchTodoAction>({
        type: ActionTypes.FETCH_TODOS,
        payload: response.data
    });
};

export const deleteTodo = (id: number) => {
    return {
        type: ActionTypes.DeleteTodo,
        payload: id
    };
};
