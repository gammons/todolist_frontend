import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';
import ListArea from './ListArea';
import AddTodo from './AddTodo';

class Todolist extends React.Component {
  state = {
    todos: this.props.store.grouped()
  };

  addTodo(subject, due) {
    this.props.store.addTodo(subject, due);
    this.setState({todos: this.props.store.grouped()});
  }

  render() {
    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu />}
        />
        <ListArea todos={this.state.todos} />
        <AddTodo addTodoFn={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default Todolist;
