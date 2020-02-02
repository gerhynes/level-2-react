import React from "react";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on && <h1>Now you see me</h1>}
              <button onClick={toggle}>Show/Hide</button>
              <Portal>{on && <h1>Hi, I'm in a Portal</h1>}</Portal>
            </>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
