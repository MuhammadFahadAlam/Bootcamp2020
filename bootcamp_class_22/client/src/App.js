import React, { createRef } from "react";
import "./App.css";
import { useMutation, useQuery } from "@apollo/client";
import { createMessageMutation, getAllMessages } from "./gqlSchema";

function App() {
  const messageValue = createRef();
  const [createMessage, { data, loading, error }] = useMutation(
    createMessageMutation
  );

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          console.log(e);
          e.preventDefault();
          createMessage({ variables: { message: messageValue.current.value } })
          .then(response => console.log(response))
          .catch(error => console.log(error))
        }}
      >
        <input ref={messageValue} placeholder="message" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
