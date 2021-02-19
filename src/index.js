import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

// ACTION
const increment = () => {
	return {
		type: "INCREMENT",
	};
};
const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

// REDUCER
const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

// STORE created with the reducer as argument
let store = createStore(counter);

// SUBSCRIBE is a listener that will be called everytime that a Dispatch is called
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
