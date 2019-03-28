import React, { Component } from "react";
import { Modal, Form } from "reactstrap";
// Connect allows to get state from redux into react.
import { connect } from "react-redux";
import { AppState } from "../store";
import { logout } from "../store/auth/actions";
import NavLink from "reactstrap/lib/NavLink";

// This is a container, a component that is hooked to redux.
/**Custom or properties defined by this component, passed by the parent component */
interface OwnProps {}
/**Properties dispatching from actions, see mapDispatchToProps */
interface DispatchProps {
  logout: () => void;
}
/**Properties comming from the application state, See mapStateToProps */
interface StateProps {}
type Props = StateProps & DispatchProps & OwnProps;

class Logout extends Component<Props> {
  render() {
    return (
      <div>
        <NavLink href="#" onClick={this.props.logout}>
          Logout
        </NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState): StateProps => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Logout);
