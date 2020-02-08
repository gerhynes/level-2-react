import React from "react";
import { Transition } from "react-spring/renderprops";
import { Toggle } from "utilities";
import { Modal, Card } from "elements";
import User from "./User";
import UserProvider from "./UserProvider";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header"></header>
        <User />
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
        <section>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Show/Hide</button>
                <Transition
                  items={on}
                  unique
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {on => on && Heading}
                </Transition>
              </>
            )}
          </Toggle>
        </section>
      </div>
    </UserProvider>
  );
}

const Heading = styles => (
  <Card style={{ ...styles }}>
    <h1>Show Me</h1>
  </Card>
);

export default App;
