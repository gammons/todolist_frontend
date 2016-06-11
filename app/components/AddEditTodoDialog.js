import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';



export default class AddEditTodoDialog extends React.Component {
  state = {
    snackbarOpen: false
  };

  actions = [
    <FlatButton
      label="Cancel"
      primary={false}
      onTouchTap={this.props.onCancel.bind(this)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.onSubmit.bind(this)}
    />
  ];

  componentDidUpdate() {
    if (this.props.open) {
      let focus = () => { this.refs.subject.focus() }
      setTimeout(focus.bind(this), 200);
    }
  }

  formatDate(date) {
    return moment(date).format("ddd MMM D");
  }

  onSubmit() {
    this.props.onSubmit(this.refs.subject.getValue(), this.refs.due.getDate());
    this.setState({snackbarOpen: true});
  }

  dueDate() {
    if (this.props.due == undefined) {
      return new Date();
    } else {
      return new Date(`${this.props.due} 05:00:00 GMT-${new Date().getTimezoneOffset() / 60}`);
    }
  }

  render() {
    return(
      <div>
        <Dialog title={this.props.title}
                modal={false}
                actions={this.actions}
                open={this.props.open}
                onRequestClose={this.props.onCancel.bind(this)}>

          <TextField ref="subject"
            hintText="Description"
            fullWidth={true}
            defaultValue={this.props.subject}
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
           message={this.props.snackbarMessage}
           autoHideDuration={3000}
         />
       </div>
    );
  }
}

