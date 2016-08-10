import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Grid, Col, Button  } from 'react-bootstrap';

import TodoTabs from '../components/todo_tabs'
import AddTodo from './add_todo';

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { due, show, group } = this.props.params;

    return(
      <div>
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

            <Button>Add todo</Button>
          </Col>
        </Grid>
      </div>
    )
  }
}
