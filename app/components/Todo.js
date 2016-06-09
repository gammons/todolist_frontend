import React from 'react';
import moment from 'moment';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TodayIcon from 'material-ui/svg-icons/action/today';
import PencilIcon from 'material-ui/svg-icons/editor/mode-edit';
import ArchiveIcon from 'material-ui/svg-icons/content/archive';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TodoActionCreators from "../actions/TodoActionCreators";
import Alert from "./Alert";

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
  state = {
    archiveAlertOpen: false,
    deleteAlertOpen: false,
    alertOpen: false,
    alertMessage: "",
    snackbarOpen: false,
    snackbarMessage: ""
  };

  handleCheck() {
    TodoActionCreators.toggleComplete(this.props.todo.id);
  }
  handleArchive() {
    TodoActionCreators.toggleArchived(this.props.todo.id);
    this.setState({snackbarOpen: true, snackbarMessage: "Todo has been archived.", archiveAlertOpen: false});
  }
  handleDelete() {
    TodoActionCreators.delete(this.props.todo.id);
    this.setState({snackbarOpen: true, snackbarMessage: "Todo has been deleted.", deleteAlertOpen: false});
  }
  openArchiveAlert() {
    this.setState({snackbarOpen: false, archiveAlertOpen: true});
  }
  openDeleteAlert() {
    this.setState({snackbarOpen: false, deleteAlertOpen: true});
  }
  cancelArchiveAlert() {
    this.setState({snackbarOpen: false, archiveAlertOpen: false});
  }
  cancelDeleteAlert() {
    this.setState({snackbarOpen: false, deleteAlertOpen: false});
  }

  render() {
    return(
      <div>
        <Alert msg="Are you sure you wish to archive this todo?" open={this.state.archiveAlertOpen} onOk={this.handleArchive.bind(this)} onCancel={this.cancelArchiveAlert.bind(this)} />
        <Alert msg="Are you sure you wish to delete this todo?" open={this.state.deleteAlertOpen} onOk={this.handleDelete.bind(this)} onCancel={this.cancelDeleteAlert.bind(this)} />
        <Snackbar
           open={this.state.snackbarOpen}
           message={this.state.snackbarMessage}
           autoHideDuration={3000}
         />
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
    if (this.props.todo.due != null) {
      return moment(this.props.todo.due).format("ddd MMM D");
    }
  }
  rightIconMenu() {
    return(
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem leftIcon={<TodayIcon />}>Due today</MenuItem>
      <MenuItem leftIcon={<TodayIcon />}>Due tomorrow</MenuItem>
      <Divider />
      <MenuItem leftIcon={<PencilIcon />}>Edit</MenuItem>
      <MenuItem onClick={this.openArchiveAlert.bind(this)} leftIcon={<ArchiveIcon />}>Archive</MenuItem>
      <Divider />
      <MenuItem onClick={this.openDeleteAlert.bind(this)} leftIcon={<DeleteIcon />}>Delete</MenuItem>
      </IconMenu>
    )
  }
}

export default Todo;

