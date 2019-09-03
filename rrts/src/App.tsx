import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

import { Todos } from "./components/Todo";

const App: React.FC = () => {
    const store = createStore(reducers, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    );
};

export default App;
