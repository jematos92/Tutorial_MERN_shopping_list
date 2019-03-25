import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/appNavBar";
import ShoppingList from "./components/shoppingList";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <ItemModal addItem={null} />
            <ShoppingList
              item={{ items: [] }}
              getItems={null}
              deleteItem={null}
            />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
