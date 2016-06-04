import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';
import ListArea from './ListArea';
import AddTodo from './AddTodo';

class Todolist extends React.Component {
  state = {
    todos: this.props.store.todos
  };

  addTodo(subject, due) {
    this.props.store.addTodo(subject, due);
    this.setState({todos: this.props.store.todos});
  }

  toggleCompleteFn(id) {
    this.props.store.toggleComplete(id);
    this.setState({todos: this.props.store.todos});
  }

  render() {
    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu />}
        />
        <ListArea todos={this.state.todos} toggleCompleteFn={this.toggleCompleteFn.bind(this)} />
        <AddTodo todos={this.state.todos} addTodo={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default Todolist;
