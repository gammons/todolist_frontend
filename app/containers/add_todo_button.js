import React, { PropTypes } from 'react'
import { startCreateTodo } from '../actions/todo_actions'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

export const AddTodoButton = (props) =>
  <Button onClick={props.startCreateTodo}>Add todo</Button>

AddTodoButton.propTypes = {
  startCreateTodo: PropTypes.func,
}

export default connect(null, { startCreateTodo })(AddTodoButton)
