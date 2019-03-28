import React, { Component } from "react";
import { Modal, Form } from "reactstrap";
// Connect allows to get state from redux into react.
import { connect } from "react-redux";
import Button from "reactstrap/lib/Button";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import ItemCreateRequest from "../models/ItemCreateRequest";
import { AppState } from "../store";
import { logout } from "../store/auth/actions";
import { errorState } from "../store/errors/types";
import NavLink from "reactstrap/lib/NavLink";
import { registerErrorId } from "../constants/constants";
import Alert from "reactstrap/lib/Alert";

// This is a container, a component that is hooked to redux.

/**This components state */
interface State {
  modal: boolean;
  name: string;
  email: string;
  password: string;
  msg: string | null;
}
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
