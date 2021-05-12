console.log('Fetch API');

/* API Fetch with Promise Then and Catch */

function fetch_with_promise() {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json) => console.log('Promise: ', json));
}

//fetch_with_promise();

/* API Fetch with Async and Await */

async function fetch_with_async() {
	const api_await = await fetch(
		'https://jsonplaceholder.typicode.com/todos/1'
	);
	const api_await_json = await api_await.json();
	console.log('Async-Await: ', api_await_json);
}

//fetch_with_async();

/* Get API Request */

async function getAPI() {
	let api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	let json = await api.json();
	console.log('GET Request Json: ',json);
}

getAPI();

/* Post API Request */

async function postAPI(){
    let api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Bootcamp',
            body: '2020',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }

    })
    
    let json = await api.json()

    console.log('POST Request Json',json)
}

postAPI()