import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Button from "reactstrap/lib/Button";
import { STATES } from "mongoose";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";

interface IState {
  items: IItem[];
}
interface IItem {
  id: string;
  name: string;
}
class ShoppingList extends Component {
  state: IState = {
    items: [
      {
        id: uuid(),
        name: "item1"
      },
      {
        id: uuid(),
        name: "item2"
      },
      {
        id: uuid(),
        name: "item3"
      },
      {
        id: uuid(),
        name: "item4"
      },
      {
        id: uuid(),
        name: "item5"
      },
      {
        id: uuid(),
        name: "item6"
      }
    ]
  };

  render() {
    const items = this.state.items;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = window.prompt("enter item");
            if (name) {
              var newState: IState = {
                items: [
                  ...this.state.items,
                  {
                    id: uuid(),
                    name: name
                  }
                ]
              };
              this.setState(newState);
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item.id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      var newState: IState = {
                        items: [...this.state.items].filter(
                          stateItem => stateItem.id !== item.id
                        )
                      };
                      this.setState(newState);
                    }}
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

export default ShoppingList;
