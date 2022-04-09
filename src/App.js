import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./compnents/Home/index";
import TodoList from "./compnents/todoList/TodoList";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/todo" exact component={TodoList} />
            </Switch>
        </Router>
    );
}

export default App;
