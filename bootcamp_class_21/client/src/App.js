// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

export default function App() {
  const GET_BOOKS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;

  function DisplayBooks() {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.books.map(({ id, author, title }) => (
      <div key={title}>
        <h3>{title}</h3>
        <p>{author}</p>
        <br />
      </div>
    ));
  }

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayBooks />
    </div>
  );
}
