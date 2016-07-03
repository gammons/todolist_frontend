import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

import FilterActionCreators from "../../actions/FilterActionCreators";
import Constants from "../../constants/Constants";
import Checked from 'material-ui/svg-icons/navigation/check';
import Divider from 'material-ui/Divider';

class TodolistIconMenu extends React.Component {
  state = {
    grouping: Constants.NONE,
    show: Constants.SHOW_UNARCHIVED
  }

  handleNoGrouping() {
    this.setState({grouping: Constants.NONE});
    FilterActionCreators.changeGrouping(Constants.NONE);
  }

  handleContextGrouping() {
    this.setState({grouping: Constants.BY_CONTEXT});
    FilterActionCreators.changeGrouping(Constants.BY_CONTEXT);
  }

  handleProjectGrouping() {
    this.setState({grouping: Constants.BY_PROJECT});
    FilterActionCreators.changeGrouping(Constants.BY_PROJECT);
  }
  handleShowArchived() {
    this.setState({show: Constants.SHOW_ARCHIVED});
    FilterActionCreators.changeShow(Constants.SHOW_ARCHIVED);
  }
  handleShowUnarchived() {
    this.setState({show: Constants.SHOW_UNARCHIVED});
    FilterActionCreators.changeShow(Constants.SHOW_UNARCHIVED);
  }

  groupingIcon(grouping) {
    if (this.state.grouping == grouping) {
      return (<Checked />);
    }
  }
  showIcon(show) {
    if (this.state.show == show) {
      return (<Checked />);
    }
  }

  render() {
    return(
      <div>
        <IconMenu
          iconButtonElement={<IconButton iconStyle={{fill: "#ffffff"}} ><SortIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem leftIcon={this.groupingIcon(Constants.NONE)} insetChildren={true} primaryText="No grouping" onClick={this.handleNoGrouping.bind(this)} />
          <MenuItem leftIcon={this.groupingIcon(Constants.BY_CONTEXT)} insetChildren={true} primaryText="By Context" onClick={this.handleContextGrouping.bind(this)} />
          <MenuItem leftIcon={this.groupingIcon(Constants.BY_PROJECT)} insetChildren={true} primaryText="By Project" onClick={this.handleProjectGrouping.bind(this)} />
          <Divider />
          <MenuItem leftIcon={this.showIcon(Constants.SHOW_UNARCHIVED)} insetChildren={true} primaryText="Unarchived" onClick={this.handleShowUnarchived.bind(this)} />
          <MenuItem leftIcon={this.showIcon(Constants.SHOW_ARCHIVED)} insetChildren={true} primaryText="Archived" onClick={this.handleShowArchived.bind(this)} />
        </IconMenu>

        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>
    );
  }
}

export default TodolistIconMenu;
