import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { dueToday, dueTomorrow, startArchiveTodo, startUnarchiveTodo, startDeleteTodo } from '../actions/todo_actions';

class TodoActions extends Component {
  render() {
    return(
      <span className="pull-right">
        <DropdownButton
          bsStyle={"link"}
          title="Actions"
          id={`button-${this.props.id}`}
          onSelect={this.handleChange.bind(this)}
        >
          <MenuItem eventKey="today">Due today</MenuItem>
          <MenuItem eventKey="tomorrow">Due tomorrow</MenuItem>
          <MenuItem eventKey="3">Edit</MenuItem>
          <MenuItem divider />
          {this.showArchiveOption()}
          <MenuItem eventKey="delete">Delete</MenuItem>
        </DropdownButton>
      </span>
    )
  }

  showArchiveOption() {
    if (this.props.todo.archived) {
      return <MenuItem eventKey="unarchive">Un-archive</MenuItem>
    } else {
      return <MenuItem eventKey="archive">Archive</MenuItem>
    }
  }

  handleChange(action) {
    switch(action) {
      case "today":
        this.props.dueToday(this.props.todo)
        break;
      case "tomorrow":
        this.props.dueTomorrow(this.props.todo)
        break;
      case "archive":
        this.props.startArchiveTodo(this.props.todo)
        break;
      case "unarchive":
        this.props.startUnarchiveTodo(this.props.todo)
        break;
      case "delete":
        this.props.startDeleteTodo(this.props.todo)
    }
  }
}

export default connect(null, { dueToday, dueTomorrow, startArchiveTodo, startUnarchiveTodo, startDeleteTodo })(TodoActions)
