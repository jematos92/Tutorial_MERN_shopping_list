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
import { register } from "../store/auth/actions";
import { errorState } from "../store/errors/types";
import NavLink from "reactstrap/lib/NavLink";
import { registerErrorId } from "../constants/constants";
import Alert from "reactstrap/lib/Alert";
import { clearErrors } from "../store/errors/actions";

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
  register: (name: string, email: string, password: string) => void;
  clearErrors: () => void;
}
/**Properties comming from the application state, See mapStateToProps */
interface StateProps {
  isAuthenticated: boolean | null;
  error: errorState;
}
type Props = StateProps & DispatchProps & OwnProps;

class RegisterModal extends Component<Props> {
  state: State = {
    modal: false,
    name: "",
    email: "",
    password: "string",
    msg: null
  };

  componentDidUpdate(prevProps: Props) {
    if (this.props.error !== prevProps.error) {
      if (this.props.error.id == registerErrorId) {
        this.setState({ msg: this.props.error.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (this.state.modal && this.props.isAuthenticated) {
      this.toggle();
    }
  }
  toggle = () => {
    this.props.clearErrors();
    this.setState({ modal: !this.state.modal });
  };
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.register(name, email, password);
    //
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <NavLink href="#" onClick={this.toggle}>
          Register
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb3-"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
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
  { register, clearErrors }
)(RegisterModal);
