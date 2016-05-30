import React from 'react';
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
          leftCheckbox={<Checkbox />}
          rightIconButton={ this.rightIconMenu(this.props.todo.id) }
          rightIcon={<MoreVertIcon />}
          primaryText={this.props.todo.subject}
          secondaryText={this.props.todo.due} />
        <Divider />
      </div>
    )
  }
  rightIconMenu(id) {
    return(
      <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
      </IconMenu>
    )
  }
}

export default Todo;

