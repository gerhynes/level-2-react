import React from "react";
import { Transition } from "react-spring/renderprops";
import { Toggle } from "utilities";
import { Modal, Card } from "elements";
import User from "./User";
import UserProvider from "./UserProvider";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React Logo" style={{ height: "200px" }} />
        </header>
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
                  from={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                  enter={{ opacity: 1, bg: "#524763", height: "200px" }}
                  leave={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
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
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: "hidden",
      height: styles.height
    }}
  >
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

export default App;
