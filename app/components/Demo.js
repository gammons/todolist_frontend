import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Demo extends React.Component {
  state = {
    open: this.props.open
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
        title="Todolist demo"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose.bind(this)}
      >
        This is a simple demo of the todolist web component.  It has multiple views and allows you to easily sort, manage, add and archive your todo list.  If you want to reset, just refresh the page.
      </Dialog>
    );
  }
}

