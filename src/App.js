import React from "react";
import ToggleRenderProps from "./ToggleRenderProps";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleRenderProps
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Now you see me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        />
      </header>
    </div>
  );
}

export default App;
