import React, { useState } from 'react';

const Debounce = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => setCounter(counter + 1);
	const decrement = () => setCounter(counter - 1);

	const debounce = (fn, delay) => {
		let timerId;
		return (...args) => {
			if (timerId) clearTimeout(timerId);
			timerId = setTimeout(() => {
				fn(...args);
			}, delay);
		};
	};
	return (
		<div>
			<button onClick={() => debounce(increment, 1000)()}>+</button>
			<p>{counter}</p>
			<button onClick={() => decrement()}>-</button>
		</div>
	);
};

export default Debounce;
