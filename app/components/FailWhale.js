import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import TodoStore from "../stores/TodoStore";

export default class FailWhale extends React.Component {
  state = {
    failureState: TodoStore.failureState(),
		open: false
  }
  onChange = () => {
    this.setState({failureState: TodoStore.failureState()});
    if (this.state.failureState.backendFailed) { this.setState({open: true}); }
  }
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }
  handleClose() {
    this.setState({open: false});
  }

  render() {
	  const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];
    return(
      <Dialog
        title="Failed to communicate with backend"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose.bind(this)}
      >
        {this.state.failureState.backendMsg}
      </Dialog>
    );
  }
}
