import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

import TodoActionCreators from "../../actions/TodoActionCreators";
import Constants from "../../constants/Constants";
import Checked from 'material-ui/svg-icons/navigation/check';

class TodolistIconMenu extends React.Component {
  state = {
    grouping: Constants.NONE
  }

  handleNoGrouping() {
    this.setState({grouping: Constants.NONE});
    TodoActionCreators.changeGrouping(Constants.NONE);
  }

  handleContextGrouping() {
    this.setState({grouping: Constants.BY_CONTEXT});
    TodoActionCreators.changeGrouping(Constants.BY_CONTEXT);
  }

  handleProjectGrouping() {
    this.setState({grouping: Constants.BY_PROJECT});
    TodoActionCreators.changeGrouping(Constants.BY_PROJECT);
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
          <MenuItem leftIcon={this.leftIcon(Constants.NONE)} primaryText="No grouping" onClick={this.handleNoGrouping.bind(this)} />
          <MenuItem leftIcon={this.leftIcon(Constants.BY_CONTEXT)} primaryText="By Context" onClick={this.handleContextGrouping.bind(this)} />
          <MenuItem leftIcon={this.leftIcon(Constants.BY_PROJECT)} primaryText="By Project" onClick={this.handleProjectGrouping.bind(this)} />
        </IconMenu>

        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>
    );
  }
}

export default TodolistIconMenu;
