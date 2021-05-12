import React, { useContext } from 'react';
import counterContext from '../contexts/counterContext';

function Child() {
	let context = useContext(counterContext);
	return (
		<div>
			<h1 style={{ color: 'red' }}>ContextAPI</h1>
			<h3>This is Child</h3>
			<p>Context: {context[0]}</p>
			<button onClick={() => context[1](context[0] + 1)}>
				Change Count
			</button>
		</div>
	);
}

export default Child;
