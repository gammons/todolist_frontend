import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import TodoActionCreators from './actions/TodoActionCreators';
import FilterActionCreators from './actions/FilterActionCreators';

import Todolist from './components/Todolist';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>

        <Route path="/" component={Todolist}>
          <IndexRedirect to="/due/today" />
        </Route>

        <Route path="/due/:due" onEnter={this.dueEnter.bind(this)} component={Todolist}/>
      </Router>
      </MuiThemeProvider>
    );
  }

  dueEnter(params, replace) {
    FilterActionCreators.changeDueFilter(params.params.due);
  }
}

const boot = () => {
  ReactDOM.render( <App />, document.getElementById('app'));
  TodoActionCreators.load();
}
boot();
