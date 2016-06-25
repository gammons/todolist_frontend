import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import NotificationStore from "../stores/NotificationStore";
import Snackbar from 'material-ui/Snackbar';

export default class DialogPrompt extends React.Component {
  state = NotificationStore.getState();
  onChange = () => {
    this.setState(NotificationStore.getState());
  }
  componentDidMount() {
    NotificationStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    NotificationStore.removeChangeListener(this.onChange);
  }

  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.state.cancelFn}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.state.successFn}
          />,
        ];

    return(
      <div>
        <Dialog title="Alert"
          modal={true}
          actions={actions}
          open={this.state.open || false}
          >
          {this.state.notificationPrompt}
        </Dialog>

        <Snackbar
           open={this.state.snackbarOpen}
           message={this.state.snackbarPrompt || ""}
           onRequestClose={this.state.closeSnackbarFn}
           autoHideDuration={3000}
         />
       </div>
    )
  }
}
