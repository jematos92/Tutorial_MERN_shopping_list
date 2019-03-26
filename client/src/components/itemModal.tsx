import React, { Component } from "react";
import { Modal, Form } from "reactstrap";
import { connect } from "react-redux";
import Button from "reactstrap/lib/Button";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import { IItemCreateRequest } from "../models/iItem";
import { AppState } from "../store";
import { addItem } from "../store/items/actions";

// This is a container, a component that is hooked to redux.

interface Props {
  addItem: typeof addItem;
}
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
    var newItem: IItemCreateRequest = {
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
