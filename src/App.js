import React, { createContext, Component } from "react";
import { Toggle } from "utilities";
import { Modal } from "elements";
import User from "./User";
import { UserContext } from "./UserContext";
import "./App.css";

class UserProvider extends Component {
  state = {
    id: "123",
    name: "Scott",
    email: "scott@leveluptuts.com"
  };

  logout = () =>
    this.setState({
      id: null,
      name: "",
      email: ""
    });

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
