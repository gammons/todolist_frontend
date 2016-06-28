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
    editOpen: false,
  };

  handleCheck() {
    setTimeout(() => { TodoActionCreators.toggleComplete(this.props.todo.id) }, 1000);
    this.setState({snackbarOpen: true, snackbarMessage: "Todo has been saved.", completed: !this.state.completed});
  }
  openArchiveAlert() {
    TodoActionCreators.promptArchive(this.props.todo.id);
  }
  openDeleteAlert() {
    TodoActionCreators.promptDelete(this.props.todo.id);
  }
  openEditTodoDialog() {
    TodoActionCreators.promptEdit(this.props.todo.id, this.props.todo.subject, this.props.todo.due);
  }
  editTodo(subject, due) {
    TodoActionCreators.update(this.props.todo.id, subject, due);
    this.setState({editOpen: false});
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
      <MenuItem onClick={this.openEditTodoDialog.bind(this)} leftIcon={<PencilIcon />}>Edit</MenuItem>
      <MenuItem onClick={this.openArchiveAlert.bind(this)} leftIcon={<ArchiveIcon />}>Archive</MenuItem>
      <Divider />
      <MenuItem onClick={this.openDeleteAlert.bind(this)} leftIcon={<DeleteIcon />}>Delete</MenuItem>
      </IconMenu>
    )
  }
}

export default Todo;
