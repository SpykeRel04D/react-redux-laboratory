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

---

## Structuring a project with React Redux

There isn't any "percect" strategy in order to integrate Redux into a React project..
But certainly, we can try to follow certain practices in order to be able to work in better conditions in our project.

### 1) Folder Structure

```
/src
.../redux
....../actions
.........index.js
....../reducers
.........reducer1.js
.........reducer2.js
.........reducer3.js
.........index.js
......createStore.js
```

---

### 2) Create Reducer

Inside reducers folder, we need an **index.js** where we are gonna combine all the reducers

```js
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
});
```

---

### 3) Create Store

We are gonna create a **createStore** file inside /redux, where we will have our store create (taking the already created rootReducer).
We can pass `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` to the store to be able to use redux devtools extensions.
Instead of this, we can use the npm package for this.

```js
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

---

### 4) Wrap App with provider and pass store as a argument

```js
import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
```

---

### 5) Create the Actions

Inside the actions folders, we can create as many Actions we need.
In a more complex project, we can create a subfolder for each action, and then use **action.helpers**, **action.action**, etc...

```js
export const increment = () => {
	return {
		type: "INCREMENT",
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};
```

---

### 6) Now we can use Redux!

**useSelector**: It gives access to a Reducer
**useDispatch**: It calls an action

```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>React Redux Laboratory</h1>
			<h2>Counter: {counter}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	);
}

export default App;
```
