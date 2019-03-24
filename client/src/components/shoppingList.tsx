import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

// Connect allows to get state from redux into react.
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import IState from "../models/iState";
import ICombinedReducer from "../models/iCombinedReducer";
import IAction from "../models/iAction";
import PropTypes from "prop-types";

interface Props {
  getItems(): IAction;
  deleteItem(id: string): IAction;
  item: IState;
}
class ShoppingList extends Component<Props> {
  static propTypes: { [key in keyof Props]: any } = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
  };

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
              <CSSTransition key={item.id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, item.id)}
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
const mapStateToProps = (state: ICombinedReducer): Object => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem } // The get Items action will be stored as a prop
)(ShoppingList);
