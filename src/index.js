import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store = {Store}>
        <App />
    </Provider>,
    rootElement   
);
