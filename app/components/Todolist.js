import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';
import ListArea from './ListArea';
import AddTodo from './AddTodo';
import SearchBar from './SearchBar';
import TodoTabs from './TodoTabs';
import FailWhale from './FailWhale';
import DialogPrompt from './DialogPrompt';
import AddEditTodoDialog from './AddEditTodoDialog';
import Demo from './Demo';
import TodoStore from '../stores/TodoStore';
import CircularProgress from 'material-ui/CircularProgress';

class Todolist extends React.Component {
  state = {
    loading: TodoStore.loading
  }
  onChange = () => {
    this.setState({loading: TodoStore.loading});
  }
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else {
      return(
        <div>
          <AppBar title="Todolist"
            showMenuIconButton={false}
            iconElementRight={<TodolistIconMenu />}
          />

          <TodoTabs selected={this.props.params.due} />
          <SearchBar />
          <ListArea />
          <AddTodo />
          <FailWhale />
          <DialogPrompt />
          <AddEditTodoDialog />
          <Demo open={false} />
        </div>
      );
    }
  }

  renderLoading() {
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress size={2} />
        </div>
    );
  }
}

export default Todolist;
