import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

class TodolistIconMenu extends React.Component {
  state = {
    grouping: "none"
  }

  handleNoGrouping() {
    this.setState({grouping: "none"});
    this.props.handleGroupChangeFn("none");
  }

  handleContextGrouping() {
    this.setState({grouping: "context"});
    this.props.handleGroupChangeFn("context");
  }

  handleProjectGrouping() {
    this.setState({grouping: "project"});
    this.props.handleGroupChangeFn("project");
  }
  render() {
    return(
      <div>
        <IconButton iconStyle={{fill: "#ffffff"}} ><SearchIcon /></IconButton>

        <IconMenu
          iconButtonElement={<IconButton iconStyle={{fill: "#ffffff"}} ><SortIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="No grouping" onClick={this.handleNoGrouping.bind(this)} />
          <MenuItem primaryText="By Context" onClick={this.handleContextGrouping.bind(this)} />
          <MenuItem primaryText="By Project" onClick={this.handleProjectGrouping.bind(this)} />
        </IconMenu>

        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>
    );
  }
}

export default TodolistIconMenu;
