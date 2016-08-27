import React, { PropTypes } from 'react'
import { Navbar, Grid, Col } from 'react-bootstrap'

import TodoTabs from '../components/todo_tabs'
import ModalDialog from './modal_dialog'
import AddTodoButton from './add_todo_button'

const App = (props) => {
  const { due, show, group } = props.params
  return (
    <div>
      <ModalDialog />
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Todolist</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid fluid>
        <Col md={12}>
          <TodoTabs due={due} show={show} group={group} />
          {props.children}

          <AddTodoButton />
        </Col>
      </Grid>
    </div>
  )
}

App.contextTypes = {
  router: PropTypes.object,
}

App.propTypes = {
  children: PropTypes.object,
  params: PropTypes.object,
}

export default App
