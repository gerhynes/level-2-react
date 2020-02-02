import React from "react";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";
import Modal from "./Modal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Hi from inside the Modal</h1>
              </Modal>
            </>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
