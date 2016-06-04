import React from 'react';
import moment from 'moment';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import DatePicker from 'material-ui/DatePicker';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class AddTodo extends React.Component {
  state = {
    open: false,
    snackbarOpen: false,
    due: null,
    subject: null
  };

  handleDialogOpen() {
    this.setState({open: true, due: null, subject: null});
    let focus = () => { this.refs.subject.focus() }
    setTimeout(focus.bind(this), 100);
  }

  handleDialogClose() {
    this.setState({open: false});
  }

  handleSnackbarClose() {
    this.setState({snackbarOpen: false});
  }

  addTodo() {
    this.setState({open: false, snackbarOpen: true, subject: null, due: null});
    this.props.addTodo(this.state.subject, moment(this.state.due).format("YYYY-MM-DD"));
  }

  formatDate(date) {
    return moment(date).format("ddd MMM D");
  }

  handleDueChange(proxy,val) {
    this.setState({due: val});
  }
  handleSubjectChange(proxy,val) {
    this.setState({subject: val});
  }

  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleDialogClose.bind(this)}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.addTodo.bind(this)}
          />,
        ];

    console.log("rerendering");
    return(
      <div>
        <Dialog title="Add todo"
                modal={false}
                actions={actions}
                open={this.state.open}
                onRequestClose={this.handleDialogClose.bind(this)}>

          <TextField ref="subject" hintText="Description" value={this.state.subject} fullWidth={true} onChange={this.handleSubjectChange.bind(this)} />

          <DatePicker
            hintText="Due date"
            value={this.state.due}
            onChange={this.handleDueChange.bind(this)}
            firstDayOfWeek={0}
            formatDate={this.formatDate.bind(this)}
          />
        </Dialog>

        <FloatingActionButton style={style} onClick={this.handleDialogOpen.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>

        <Snackbar
           open={this.state.snackbarOpen}
           message="Todo has been added."
           autoHideDuration={3000}
           onRequestClose={this.handleSnackbarClose.bind(this)}
         />
      </div>
    )
  }
}
export default AddTodo;

