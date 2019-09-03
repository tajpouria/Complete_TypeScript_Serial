import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos, deleteTodo, Todo } from "../actions";
import { StoreState } from "../reducers";

interface IProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface IState {
    fetching: boolean;
}

class _Todo extends Component<IProps, IState> {
    public state = { fetching: false };

    public componentDidUpdate(prevProps: IProps) {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    render() {
        return (
            <>
                <button onClick={this.fetchTodos}>Fetch</button>
                {this.state.fetching ? <div>LOADING ... </div> : undefined}
                <div>{this.renderTodos()} </div>
            </>
        );
    }

    private fetchTodos = (): void => {
        if (this.props.todos.length) return;
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    private renderTodos = (): JSX.Element[] => {
        return this.props.todos.map((todo: Todo) => (
            <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
                {todo.title}
            </div>
        ));
    };
}

const mapStateToProps = ({ todos }: StoreState) => {
    return { todos };
};

export const Todos = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_Todo);
