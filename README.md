# React-Redux Laboratory

Simple repository to try some features of React-Redux library.

## Example of how setup Redux in the simpliest way possible (1 file + minium extra code)

### 1) Install dependencies

```bash
$ npm install react-redux redux
```

---

### 2) Create the Store

We can describe the store as an outside container where we can have all the data.
It works as a big state to be THE state of all the components.

**STORE: Globalized state**

```js
import { createStore } from "redux";
let store = createStore(counter); // Counter is the Reducer that we are gonna create on step (4)
```

---

### 3) Create an Action

Actions describes what it the purpose of the "operation".
It's a name that explains what we are doing.

```js
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
```

---

### 4) Create Reducer

Reducers are functions that take the current state and an action as arguments, and return a new state result.
In other words, (state, action) => newState.

```js
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
```

---

### 5) Create Dispatch

Dispatch is the function that calls the process to fire an action.

```js
store.dispatch(increment()); // Where increment is an Action
```

---

### 6) Listen for Dispatch using Subscribe

We can use the method **subscribe** to listen for Dispatch calls.

```js
store.subscribe(() => console.log(store.getState()));
```

---

### Index.js of Redux simpliest setup in one file:

<details open>
<summary>Click to show the code</summary>

```js
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
store.subscribe(() =>
	console.log(
		"Hey! A dispatch action has been called. New value: " + store.getState()
	)
);

// DISPATCH
console.log("Value of counter before increment: " + store.getState());
store.dispatch(increment());

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
```

</details>
```
