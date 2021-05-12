import React, {useState} from 'react';
import Parent from './components/Parent';
import CounterContext from './contexts/counterContext';

function App() {
  let countState = useState(1)
  return (
    <CounterContext.Provider value={countState} >
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
