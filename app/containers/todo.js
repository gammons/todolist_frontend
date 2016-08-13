import React, { Component } from 'react';
import moment from 'moment';
import { ListGroup, ListGroupItem, Checkbox, DropdownButton, MenuItem, Row, Grid, Col } from 'react-bootstrap';
import styles from '../styles.css'
import { toggleComplete } from '../actions/todo_actions';
import { connect } from 'react-redux';
import TodoActions from './todo_actions';

class Todo extends Component {
  render() {
    const {todo} = this.props;

    return(
      <ListGroupItem className="clearfix" key={todo.id}>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={1} sm={1}>
              <input type="checkbox" checked={todo.completed} onChange={this.handleCheck.bind(this)} />
            </Col>
            <Col xs={10} sm={8}>
              {this.renderSubject()}
              <small>{this.formatDue(todo.due)}</small>
            </Col>
            <Col xs={12} sm={3}>
              <TodoActions todo={this.props.todo} />
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    )
  }

  renderSubject() {
    if (this.props.todo.completed) {
      return <s className="text-muted">{this.props.todo.subject}</s>
    } else {
      return <p>{this.props.todo.subject}</p>
    }

  }

  handleCheck(e) {
    this.props.toggleComplete(this.props.todo)
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

export default connect(null, { toggleComplete })(Todo)
