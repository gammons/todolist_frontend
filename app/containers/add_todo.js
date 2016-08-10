import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { createTodo  } from '../actions/todo_actions';
import Todolist from './todolist';

class AddTodo extends Component {

  handleSave() {
    this.props.createTodo(this.refs.subject.getValue(), this.refs.due.getDate());
  }

  render() {
    let {due, show, group} = this.props.location.state;
    let focus = () => { this.refs.subject.focus()  }
    setTimeout(focus.bind(this), 200);

    return(
      <div>
        add todo
        <Todolist params={{due: due, show: show, group: group}}/>
      </div>
    )
  }

  formatDate(date) {
    return moment(date).format("ddd MMM D");
  }

  dueDate() {
    if (this.props.due == undefined) {
      return new Date();
    } else {
      return new Date(`${this.props.due} 05:00:00 GMT-${new Date().getTimezoneOffset() / 60}`);
    }
  }
}

export default connect(null, { createTodo })(AddTodo)
