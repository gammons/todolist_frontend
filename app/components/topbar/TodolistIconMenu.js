import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

import TodoActionCreators from "../../actions/TodoActionCreators";
import Groupings from "../../constants/Groupings";
import Checked from 'material-ui/svg-icons/navigation/check';

class TodolistIconMenu extends React.Component {
  state = {
    grouping: Groupings.NONE
  }

  handleNoGrouping() {
    this.setState({grouping: Groupings.NONE});
    TodoActionCreators.changeGrouping(Groupings.NONE);
  }

  handleContextGrouping() {
    this.setState({grouping: Groupings.BY_CONTEXT});
    TodoActionCreators.changeGrouping(Groupings.BY_CONTEXT);
  }

  handleProjectGrouping() {
    this.setState({grouping: Groupings.BY_PROJECT});
    TodoActionCreators.changeGrouping(Groupings.BY_PROJECT);
  }

  leftIcon(grouping) {
    if (this.state.grouping == grouping) {
      return (<Checked />);
    }
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
          <MenuItem leftIcon={this.leftIcon(Groupings.NONE)} primaryText="No grouping" onClick={this.handleNoGrouping.bind(this)} />
          <MenuItem leftIcon={this.leftIcon(Groupings.BY_CONTEXT)} primaryText="By Context" onClick={this.handleContextGrouping.bind(this)} />
          <MenuItem leftIcon={this.leftIcon(Groupings.BY_PROJECT)} primaryText="By Project" onClick={this.handleProjectGrouping.bind(this)} />
        </IconMenu>

        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>
    );
  }
}

export default TodolistIconMenu;
