import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { ListGroupItem, Row, Grid, Col } from 'react-bootstrap'
import styles from '../styles.css'
import { startToggleComplete } from '../actions/todo_actions'
import { connect } from 'react-redux'
import TodoActions from './todo_actions'

class Todo extends Component {
  static get propTypes() {
    return {
      todo: PropTypes.object,
      startToggleComplete: PropTypes.func,
    }
  }

  constructor() {
    super()
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {
    this.props.startToggleComplete(this.props.todo)
  }

  formatDue(inDue) {
    if (inDue === null) return ''
    const due = moment(inDue).startOf('day')
    const today = moment().startOf('day')
    const tomorrow = moment().add(1, 'day').startOf('day')

    if (due.isBefore(today)) {
      return (<div className={styles.red}>{due.format('ddd MMM D')}</div>)
    }
    if (today.isSame(due)) {
      return (<div className={styles.blue}>Today</div>)
    }

    if (due.isSame(tomorrow)) {
      return (<div className={styles.blue}>Tomorrow</div>)
    }
    return due.format('ddd MMM D')
  }

  renderSubject() {
    if (this.props.todo.completed) {
      return <s className="text-muted">{this.props.todo.subject}</s>
    }
    return <p>{this.props.todo.subject}</p>
  }

  render() {
    const { todo } = this.props

    return (
      <ListGroupItem className="clearfix" key={todo.id}>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={1} sm={1}>
              <input type="checkbox" checked={todo.completed} onChange={this.handleCheck} />
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
}

export default connect(null, { startToggleComplete })(Todo)
