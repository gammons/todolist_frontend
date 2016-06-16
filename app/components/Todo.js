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
import AddEditTodoDialog from "./AddEditTodoDialog";

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
    completed: this.props.todo.completed,
    archiveAlertOpen: false,
    deleteAlertOpen: false,
    editOpen: false,
    alertOpen: false,
    alertMessage: "",
    snackbarOpen: false,
    snackbarMessage: ""
  };

  handleCheck() {
    setTimeout(() => { TodoActionCreators.toggleComplete(this.props.todo.id) }, 1000);
    this.setState({snackbarOpen: true, snackbarMessage: "Todo has been saved.", completed: !this.state.completed});
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
  openEditDialog() {
    this.setState({editOpen: true});
  }
  cancelArchiveAlert() {
    this.setState({snackbarOpen: false, archiveAlertOpen: false});
  }
  cancelDeleteAlert() {
    this.setState({snackbarOpen: false, deleteAlertOpen: false});
  }
  handleEditDialogClose() {
    this.setState({editOpen: false});
  }
  editTodo(subject, due) {
    TodoActionCreators.update(this.props.todo.id, subject, due);
    this.setState({editOpen: false});
  }
  closeSnackbar() {
    this.setState({snackbarOpen: false});
  }

  dueToday() {
    TodoActionCreators.update(this.props.todo.id, this.props.todo.subject, new Date().toString());
  }

  dueTomorrow() {
    let tomorrow = moment().add(1, "day");
    TodoActionCreators.update(this.props.todo.id, this.props.todo.subject, tomorrow.toString());
  }

  render() {
    return(
      <div>
        <Alert msg="Are you sure you wish to archive this todo?" open={this.state.archiveAlertOpen} onOk={this.handleArchive.bind(this)} onCancel={this.cancelArchiveAlert.bind(this)} />
        <Alert msg="Are you sure you wish to delete this todo?" open={this.state.deleteAlertOpen} onOk={this.handleDelete.bind(this)} onCancel={this.cancelDeleteAlert.bind(this)} />
        <Snackbar
           open={this.state.snackbarOpen}
           onRequestClose={this.closeSnackbar.bind(this)}
           message={this.state.snackbarMessage}
           autoHideDuration={3000}
         />

        <AddEditTodoDialog
          open={this.state.editOpen}
          subject={this.props.todo.subject}
          due={this.props.todo.due}
          title="Edit todo"
          snackbarMessage="Todo has been updated."
          onCancel={this.handleEditDialogClose.bind(this)}
          onSubmit={this.editTodo.bind(this)}
        />

        <ListItem
          leftCheckbox={<Checkbox defaultChecked={this.state.completed} onClick={this.handleCheck.bind(this)} />}
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
      let due = moment(this.props.todo.due).startOf("day");
      let today = moment().startOf("day");

      if (due.isBefore(today)) {
        return (<div className='red'>{due.format("ddd MMM D")}</div>);
      }
      if (today.isSame(due)) {
        return (<div className='blue'>{due.format("ddd MMM D")}</div>);
      }

      let tomorrow = moment().add(1,"day").startOf("day");
      if (due.isSame(tomorrow)) {
        return (<div className='blue'>{due.format("ddd MMM D")}</div>);
      }
      return due.format("ddd MMM D");
    }
  }

  rightIconMenu() {
    return(
      <IconMenu
        iconButtonElement={iconButtonElement}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem onClick={this.dueToday.bind(this)} leftIcon={<TodayIcon />}>Due today</MenuItem>
      <MenuItem onClick={this.dueTomorrow.bind(this)} leftIcon={<TodayIcon />}>Due tomorrow</MenuItem>
      <Divider />
      <MenuItem onClick={this.openEditDialog.bind(this)} leftIcon={<PencilIcon />}>Edit</MenuItem>
      <MenuItem onClick={this.openArchiveAlert.bind(this)} leftIcon={<ArchiveIcon />}>Archive</MenuItem>
      <Divider />
      <MenuItem onClick={this.openDeleteAlert.bind(this)} leftIcon={<DeleteIcon />}>Delete</MenuItem>
      </IconMenu>
    )
  }
}

export default Todo;

