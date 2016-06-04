import React from 'react';

export default class AddEditTodoDialog extends React.Component {
  state = {
    open: false,
    snackbarOpen: false
  }
  getTitle() {
    if (this.props.todo === undefined) {
      return "Add todo"
    } else {
      return "Edit todo"
    }
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

    return(
      <div>
        <Dialog title={this.getTitle().bind(this)}
                modal={false}
                actions={actions}
                open={this.props.open}
                onRequestClose={this.handleDialogClose.bind(this)}>
          <TextField ref="subject" hintText="Description" fullWidth={true} onKeyDown={this.validate.bind(this)} />
        </Dialog>
        <Snackbar
           open={this.state.snackbarOpen}
           message="Todo has been added."
           autoHideDuration={3000}
           onRequestClose={this.handleSnackbarClose.bind(this)}
         />
       </div>
    );
  }
}

