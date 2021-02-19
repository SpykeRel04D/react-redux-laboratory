# React-Redux Laboratory

Simple repository to try some features of React-Redux library.

## 1) Install dependencies

```bash
$ npm install react-redux redux
```

---

## 2) Create the Store

We can describe the store as an outside container where we can have all the data.
It works as a big state to be THE state of all the components.

**STORE: Globalized state**

```js
import { createStore } from "redux";
let store = createStore(counter); // Counter is the Reducer that we are gonna create on step (4)
```

---

## 3) Create an Action

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

## 4) Create Reducer

Reducers have the mission to detail how the actions transforms an state to the next state.

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

## 5) Create Dispatch

Dispatch is the function that calls the process to fire an action.

```js
store.dispatch(increment()); // Where increment is an Action
```

---

## 6) Listen for Dispatch using Subscribe

We can use the method **subscribe** to listen for Dispatch calls.

```js
store.subscribe(() => console.log(store.getState()));
```
