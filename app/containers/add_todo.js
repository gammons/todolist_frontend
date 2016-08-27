import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { createTodo } from '../actions/todo_actions'
import Todolist from './todolist'

class AddTodo extends Component {

  static get propTypes() {
    return {
      createTodo: PropTypes.func,
      due: PropTypes.string,
      location: PropTypes.object,
    }
  }

  handleSave() {
    this.props.createTodo(this.refs.subject.getValue(), this.refs.due.getDate())
  }

  dueDate() {
    if (this.props.due === undefined) {
      return new Date()
    }
    return new Date(`${this.props.due} 05:00:00 GMT-${new Date().getTimezoneOffset() / 60}`)
  }

  formatDate(date) {
    return moment(date).format('ddd MMM D')
  }

  render() {
    const { due, show, group } = this.props.location.state
    const focus = () => this.refs.subject.focus()
    setTimeout(focus.bind(this), 200)

    return (
      <div>
        add todo
        <Todolist params={{ due, show, group }} />
      </div>
    )
  }
}

export default connect(null, { createTodo })(AddTodo)
