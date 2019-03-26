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
import { addItem } from "../store/items/actions";

// This is a container, a component that is hooked to redux.

/**This components state */
interface State {}
/**Custom or properties defined by this component, passed by the parent component */
interface OwnProps {}
/**Properties dispatching from actions, see mapDispatchToProps */
interface DispatchProps {
  addItem: (item: ItemCreateRequest) => void;
}
/**Properties comming from the application state, See mapStateToProps */
interface StateProps {}
type Props = StateProps & DispatchProps & OwnProps;

class ItemModal extends Component<Props> {
  state = {
    modal: false, // True if the modal is open,
    name: "" // Form input, state only of the component, it doesnt go to redux.
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var newItem: ItemCreateRequest = {
      name: this.state.name
    };
    this.props.addItem(newItem);
    this.toggle();
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState): Object => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
