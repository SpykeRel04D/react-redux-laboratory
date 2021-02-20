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
