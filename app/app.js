import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Todolist from './components/Todolist';
import TodoStore from './TodoStore';
import TestBackend from './backends/TestBackend';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Todolist store={this.props.store} />
      </MuiThemeProvider>
    );
  }
}

const boot = () => {
  let backend = new TestBackend();
  let store = new TodoStore(backend);
  backend.load().then((todos) => {
    store.load(todos);
    ReactDOM.render(
      <App store={store} />,
      document.getElementById('app')
    );
  });
}
boot();
