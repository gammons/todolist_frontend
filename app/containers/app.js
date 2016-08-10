import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Grid, Col } from 'react-bootstrap';
import { toggleModal } from '../actions/modal_actions';

import TodoTabs from '../components/todo_tabs';
import ModalDialog from './modal_dialog';
import AddTodoButton from './add_todo_button';

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { due, show, group } = this.props.params;

    return(
      <div>
        <ModalDialog />
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Todolist</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Col md={12}>
            <TodoTabs due={due} show={show} group={group} />
            {this.props.children}

            <AddTodoButton />
          </Col>
        </Grid>
      </div>
    )
  }

}
