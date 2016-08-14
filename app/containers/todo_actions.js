import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { dueToday, dueTomorrow } from '../actions/todo_actions';
import { toggleAlert, archiveAlert } from '../actions/modal_actions';

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
          <MenuItem eventKey="archive">Archive</MenuItem>
          <MenuItem eventKey="delete">Delete</MenuItem>
        </DropdownButton>
      </span>
    )
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
        let onOk = () => {
          this.props.archiveAlert(false)
          this.props.toggleArchived(todo).then(() => {
            this.props.toggleAlert(true, "Todo has been archived.")
          })
        }
        this.props.archiveAlert(true, onOk)
    }
  }
}

export default connect(null, { dueToday, dueTomorrow, archiveAlert })(TodoActions)
