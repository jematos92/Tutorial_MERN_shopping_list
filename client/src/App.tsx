import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/appNavBar";
import ShoppingList from "./components/shoppingList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <ShoppingList item={{ items: [] }} getItems={null} />
        </div>
      </Provider>
    );
  }
}

export default App;
