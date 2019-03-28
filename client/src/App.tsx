import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/appNavBar";
import ShoppingList from "./components/shoppingList";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { loadUser } from "../src/store/auth/actions";
import { AppState } from "../src/store";

/**This components state */
interface State {}
/**Custom or properties defined by this component, provided by the parent component */
interface OwnProps {}
/**Properties dispatching from actions, see mapDispatchToProps */
interface DispatchProps {
  loadUser: () => void;
}
/**Properties comming from the application state, See mapStateToProps */
interface StateProps {}
type Props = StateProps & DispatchProps & OwnProps;

class App extends Component<Props> {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { loadUser }
)(App);
