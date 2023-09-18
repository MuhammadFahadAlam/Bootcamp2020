import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setInterval(() => {
            fetch("/api/books")
                .then((res) => res.json())
                .then((data) => {
                    setBooks(data);
                });
        }, 2000);
    }, []);

    const addBook = () => {
        const title = prompt("Enter Book Title");
        const author = prompt("Enter Book Author");

        fetch("/api/add", {
            method: "POST",
            body: JSON.stringify({ title, author }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className="App">
            {books.length ? (
                <>
                    <h2>Available Books</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, key) => (
                                <tr key={key}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={addBook}>Add Book</button>
                </>
            ) : (
                <>
                    <h2>Loading...</h2>
                </>
            )}
        </div>
    );
}

export default App;
