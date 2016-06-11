import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';

export default class AddEditTodoDialog extends React.Component {
  state = {
    subject: this.props.subject,
    due: this.props.due,
    snackbarOpen: false
  }

  componentDidUpdate() {
    if (this.props.open) {
      let focus = () => { this.refs.subject.focus() }
      setTimeout(focus.bind(this), 100);
    }
  }

  handleDueChange(proxy,val) {
    this.setState({due: val});
  }
  handleSubjectChange(proxy,val) {
    this.setState({subject: val});
  }

  formatDate(date) {
    return moment(date).format("ddd MMM D");
  }

  onSubmit() {
    this.props.onSubmit(this.state.subject, this.state.due);
    this.setState({snackbarOpen: true, subject: "", due: ""});
  }

  render() {
    const actions = [
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
          />,
        ];

    return(
      <div>
        <Dialog title={this.props.title}
                modal={false}
                actions={actions}
                open={this.props.open}
                onRequestClose={this.props.onCancel.bind(this)}>

          <TextField ref="subject"
            hintText="Description"
            fullWidth={true}
            value={this.state.subject}
            onChange={this.handleSubjectChange.bind(this)}
          />

          <DatePicker
            hintText="Due date"
            value={this.state.due}
            onChange={this.handleDueChange.bind(this)}
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

