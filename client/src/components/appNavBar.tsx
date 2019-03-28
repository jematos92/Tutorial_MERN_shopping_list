import React, { Component, Fragment } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import RegisterModal from "../components/registerModal";
import Logout from "../components/logout";
import LoginModal from "../components/login";
import { AppState } from "../store";
import { connect } from "react-redux";
import { AuthState } from "../store/auth/types";

/**Custom or properties defined by this component, passed by the parent component */
interface OwnProps {}
/**Properties dispatching from actions, see mapDispatchToProps */
interface DispatchProps {}
/**Properties comming from the application state, See mapStateToProps */
interface StateProps {
  auth: AuthState;
}
type Props = StateProps & DispatchProps & OwnProps;
class AppNavBar extends Component<Props> {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const AuthLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );
    const GuestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>

        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? AuthLinks : GuestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(AppNavBar);
