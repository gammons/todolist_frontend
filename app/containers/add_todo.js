import React, { Component } from 'react';
import Todolist from './todolist';

export default class AddTodo extends Component {
  render() {
    let {due, show, group} = this.props.location.state;
    return(
      <div>
        <p>Adding todo</p>
        <Todolist params={{due: due, show: show, group: group}}/>
      </div>
    )
  }
}
