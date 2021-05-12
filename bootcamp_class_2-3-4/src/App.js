import React, { useState } from 'react';
import './App.css';
import Message from './components/Message';

function App() {
	let [count, setCount] = useState(0);
	let [isMorning, setMorning] = useState(false);

	return (
		<div className={` box ${isMorning ? 'dayLight' : '' }`}>
			<h1 className={`${isMorning ? 'dark' : '' }`}>Have a good <span>{isMorning ? 'Morning' : 'Evening'}</span></h1>
			<Message count={count} isMorning={isMorning}/>
			<br />
			<br/>
			<button className='btn' onClick={() => setCount(++count)}>Update</button>
			<button className='btn' onClick={() => setMorning(!isMorning)}>Change </button>
		</div>
	);
}

export default App;
