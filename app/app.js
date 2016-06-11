import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Todolist from './components/Todolist';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Todolist />
      </MuiThemeProvider>
    );
  }
}

const boot = () => {
  ReactDOM.render( <App />, document.getElementById('app'));
}
boot();
