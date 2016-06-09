import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class Alert extends React.Component {
  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.props.onCancel}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.props.onOk}
          />,
        ];

    return(
      <Dialog title="Alert"
        modal={true}
        actions={actions}
        open={this.props.open}
        >
        {this.props.msg}
      </Dialog>
    )
  }
}
