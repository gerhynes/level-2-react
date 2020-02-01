import React from "react";
import Toggle from "./ToggleRPC";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Now you see me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
