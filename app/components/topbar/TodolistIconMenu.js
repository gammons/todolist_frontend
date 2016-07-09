import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

import Constants from "../../constants/Constants";
import Checked from 'material-ui/svg-icons/navigation/check';
import Divider from 'material-ui/Divider';
import TodoStore from '../../stores/TodoStore';

class TodolistIconMenu extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  state = {
    show: TodoStore.show,
    grouping: TodoStore.grouping
  }
  onChange = () => {
    this.setState({show: TodoStore.show, grouping: TodoStore.grouping});
  }
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  handleNoGrouping() {
    this.context.router.push(TodoStore.getNextRoute({grouping: Constants.NONE}));
  }

  handleContextGrouping() {
    this.context.router.push(TodoStore.getNextRoute({grouping: Constants.BY_CONTEXT}));
  }

  handleProjectGrouping() {
    this.context.router.push(TodoStore.getNextRoute({grouping: Constants.BY_PROJECT}));
  }
  handleShowArchived() {
    this.context.router.push(TodoStore.getNextRoute({show: Constants.SHOW_ARCHIVED}));
  }
  handleShowUnarchived() {
    this.context.router.push(TodoStore.getNextRoute({show: Constants.SHOW_UNARCHIVED}));
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
