import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';

import AddEditNotificationStore from "../stores/AddEditStore";

export default class AddEditTodoDialog extends React.Component {
  state = AddEditNotificationStore.getState();
  onChange = () => {
    this.setState(AddEditNotificationStore.getState());
  }
  componentDidMount() {
    AddEditNotificationStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    AddEditNotificationStore.removeChangeListener(this.onChange);
  }

  componentDidUpdate() {
    if (this.state.open) {
      let focus = () => { this.refs.subject.focus() }
      setTimeout(focus.bind(this), 200);
    }
  }

  handleSubmit() {
    this.state.successFn(this.refs.subject.getValue(), this.refs.due.getDate());
  }

  formatDate(date) {
    return moment(date).format("ddd MMM D");
  }

  dueDate() {
    if (this.state.due == undefined) {
      return new Date();
    } else {
      return new Date(`${this.state.due} 05:00:00 GMT-${new Date().getTimezoneOffset() / 60}`);
    }
  }

  actions = [
    <FlatButton
      label="Cancel"
      primary={false}
      onTouchTap={this.state.cancelFn}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleSubmit.bind(this)}
    />
  ];

  render() {
    return(
      <div>
        <Dialog title={this.state.id === undefined ? "Add Todo" : "Edit Todo" }
                modal={false}
                actions={this.actions}
                open={this.state.open}
                onRequestClose={this.state.cancelFn}>

          <TextField ref="subject"
            hintText="Description"
            fullWidth={true}
            defaultValue={this.state.subject}
          />

          <DatePicker
            ref="due"
            hintText="Due date"
            defaultDate={this.dueDate()}
            firstDayOfWeek={0}
            formatDate={this.formatDate.bind(this)}
          />
        </Dialog>

        <Snackbar
           open={this.state.snackbarOpen}
           message={this.state.snackbarPrompt || ""}
           onRequestClose={this.state.closeSnackbarFn}
           autoHideDuration={3000}
         />
       </div>
    );
  }
}

