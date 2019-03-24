import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/appNavBar";
import shoppingList from "./components/shoppingList";
import ShoppingList from "./components/shoppingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
