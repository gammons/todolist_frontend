import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class TodoActions extends Component {
  render() {
    return(
      <span className="pull-right">
        <DropdownButton
          bsStyle={"link"}
          title="Actions"
          id={`button-${this.props.id}`}
          onSelect={this.handleChange.bind(this)}
        >
          <MenuItem eventKey="1">Due today</MenuItem>
          <MenuItem eventKey="2">Due tomorrow</MenuItem>
          <MenuItem eventKey="3">Edit</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Archive</MenuItem>
          <MenuItem eventKey="5">Delete</MenuItem>
        </DropdownButton>
      </span>
    )
  }

  handleChange() {
  }
}

