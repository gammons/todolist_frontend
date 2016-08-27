import React, { Component, PropTypes } from 'react'
import { fetchTodos } from '../actions/todo_actions'
import { connect } from 'react-redux'
import Todo from './todo'
import { ListGroup } from 'react-bootstrap'

import filteredTodosSelector from '../selectors/filtered_todos'

import FilterButtons from '../components/filter_buttons'

class Todolist extends Component {

  static get propTypes() {
    return {
      params: PropTypes.object,
      fetchTodos: PropTypes.func,
      todos: PropTypes.array,
    }
  }

  componentWillMount() {
    const { show, due, group } = this.props.params
    this.props.fetchTodos(show, due, group)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.due !== this.props.params.due
      || nextProps.params.show !== this.props.params.show
      || nextProps.params.group !== this.props.params.group) {
      this.props.fetchTodos(nextProps.params.show, nextProps.params.due, nextProps.params.group)
    }
  }

  showGroup(group, idx) {
    return (
      <div key={idx}>
        <h3>{group.title}</h3>
        <ListGroup>
          {this.renderTodosForGroup(group.todos)}
        </ListGroup>
      </div>
    )
  }

  renderTodosForGroup(todos) {
    if (todos.length === 0) {
      return <p>No todos.</p>
    }
    return todos.map(this.renderTodo.bind(this))
  }

  renderTodo(todo, idx) {
    return (
      <Todo todo={todo} key={idx} />
    )
  }

  render() {
    let todos = []
    if (this.props.todos) { todos = this.props.todos }
    const { show, due, group } = this.props.params

    return (
      <div>
        <span className="pull-right">
          <FilterButtons show={show} group={group} due={due} />

        </span>
        {todos.map(this.showGroup.bind(this))}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: filteredTodosSelector(state, ownProps),
  }
}

export default connect(mapStateToProps, { fetchTodos })(Todolist)
