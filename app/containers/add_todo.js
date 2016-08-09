import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
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
        <Card>
          <CardText>
            <h3>Add todo</h3>
            <TextField ref="subject" hintText="Title" fullWidth={true} />
            <DatePicker
              ref="due"
              hintText="Due date"
              defaultDate={this.dueDate()}
              firstDayOfWeek={0}
              formatDate={this.formatDate.bind(this)}
            />
          </CardText>
          <CardActions>
            <FlatButton primary={true} label="Save" onTouchTap={this.handleSave.bind(this)} />
            <FlatButton label="Cancel" />
          </CardActions>
        </Card>
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
