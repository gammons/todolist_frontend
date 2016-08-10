import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';

export default class Todo extends Component {
  render() {
    return(
      <ListGroupItem className="clearfix" key={this.props.todo.id}>
        <Checkbox inline className="clearfix" style={{marginTop: "13px"}}>
          {this.props.todo.subject}
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
}
