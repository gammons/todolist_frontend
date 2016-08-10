import React, { Component } from 'react';
import moment from 'moment';
import { ListGroup, ListGroupItem, Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import styles from '../styles.css'

export default class Todo extends Component {
  render() {
    const {todo} = this.props;

    return(
      <ListGroupItem className="clearfix" key={todo.id}>
        <Checkbox inline className="clearfix" style={{marginTop: "13px"}}>
          {todo.subject}
          <br/>
          <small>{this.formatDue(todo.due)}</small>
        </Checkbox>
        <span className="pull-right">
          <DropdownButton pullRight bsStyle={"link"} title="Actions" id={`button-${this.props.todo.id}`}>
            <MenuItem eventKey="1">Due today</MenuItem>
            <MenuItem eventKey="2">Due tomorrow</MenuItem>
            <MenuItem eventKey="3">Edit</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Archive</MenuItem>
            <MenuItem eventKey="5">Delete</MenuItem>
          </DropdownButton>
        </span>
      </ListGroupItem>
    )
  }

  formatDue(due) {
    if (due != null) {
      due = moment(due).startOf("day");
      let today = moment().startOf("day");
      let tomorrow = moment().add(1,"day").startOf("day");

      if (due.isBefore(today)) {
        return (<div className={styles.red}>{due.format("ddd MMM D")}</div>);
      }
      if (today.isSame(due)) {
        return (<div className={styles.blue}>Today</div>);
      }

      if (due.isSame(tomorrow)) {
        return (<div className={styles.blue}>Tomorrow</div>);
      }
      return due.format("ddd MMM D");
    }
  }
}
