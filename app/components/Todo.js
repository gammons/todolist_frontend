import React from 'react';
import moment from 'moment';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon />
  </IconButton>
)

class Todo extends React.Component {
  render() {
    return(
      <div>
        <ListItem
          leftCheckbox={<Checkbox defaultChecked={this.props.todo.completed} onClick={this.handleCheck.bind(this)} />}
          rightIconButton={ this.rightIconMenu() }
          rightIcon={<MoreVertIcon />}
          primaryText={this.props.todo.subject}
          secondaryText={this.formatDue()} />
        <Divider />
      </div>
    )
  }
  formatDue() {
    if (this.props.todo.due != undefined) {
      return moment(this.props.todo.due).format("ddd MMM D");
    }
  }
  rightIconMenu() {
    return(
      <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
      </IconMenu>
    )
  }
  handleCheck() {
    this.props.toggleCompleteFn(this.props.todo.id);
  }
}

export default Todo;

