import React, { useReducer } from 'react';
import counterReducer from '../reducers/counterReducer';

function ChildUsingReducer() {
	const [state, dispatch] = useReducer(counterReducer, 1);
	return (
		<div>
			<h1 style={{ color: 'red' }}>Reducer</h1>
			<h3>Value Reducer: {state}</h3>
			<button onClick={() => dispatch('INCREMENT')}>
				Add Increment Value through Reducer
			</button>
		</div>
	);
}

export default ChildUsingReducer;
