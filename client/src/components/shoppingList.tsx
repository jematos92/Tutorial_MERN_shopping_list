import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

// Connect allows to get state from redux into react.
import { connect } from "react-redux";
import { deleteItem, getItems } from "../store/items/actions";
import { AppState } from "../store";
import { itemsState } from "../store/items/types";
interface Props {
  getItems: typeof getItems;
  deleteItem: typeof deleteItem;
  item: itemsState;
}
class ShoppingList extends Component<Props> {
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = (id: string) => {
    this.props.deleteItem(id);
  };
  render() {
    const items = this.props.item.items;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, item._id)}
                  >
                    {" "}
                    &times;
                  </Button>
                  {item.name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

/**A function that takes the combined reducer
 * and returns an instance of the global state
 * This functions maps the application global state
 * to the component proptype
 * Each field in the object returned will become a prop for your actual component
 */
const mapStateToProps = (state: AppState): Object => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem } // The get Items action will be stored as a prop
)(ShoppingList);
