import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Todolist from './components/Todolist';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Todolist />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
