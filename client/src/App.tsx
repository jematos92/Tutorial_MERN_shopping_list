import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/appNavBar";
import ShoppingList from "./components/shoppingList";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <ItemModal />
          <ShoppingList item={{ items: [], loading: false }} />
        </Container>
      </div>
    );
  }
}

export default App;
