import { Suspense, useEffect, useState } from 'react';
import './App.css';

function App() {
	const [state, setState] = useState([{}]);

	useEffect(() => {
		// Using Await
		// Github API: 'https://api.github.com/users/muhammadfahadalam/repos'

		async function fetchData() {
			// You can await here
			const response = await fetch(
				'https://api.github.com/users/muhammadfahadalam/repos'
			);
			const data = await response.json();
			
			setState(data);
			console.log(data);
			// ...
		}
		fetchData();
	}, []);

	/*
	useEffect(() => {
		
    // Using Fetch

    fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setState(json);
			});

	}, [state]);
	*/
	
	return (
		<div>
			<Suspense fallback={<h1>sdjskdsk</h1>}>
			<ul>
				{state.map((obj,id) => <li key={id}>{obj.name}</li>)}
			</ul>
			</Suspense>
			
		</div>
	);
}

export default App;
