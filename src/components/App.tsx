import React from 'react';
import Clock from "./clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Clock size={400} timeFormat="standard" hourFormat="roman" />
      </header>
    </div>
  );
}

export default App;
