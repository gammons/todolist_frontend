import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';
import ListArea from './ListArea';
import AddTodo from './AddTodo';

class Todolist extends React.Component {
  state = {
    todos: this.props.store.grouped(),
    grouping: "none"
  };

  addTodo(subject, due) {
    this.props.store.addTodo(subject, due);
    this.setState({todos: this.props.store.grouped(this.state.grouping)});
  }

  handleGroupChange(grouping) {
    this.setState({todos: this.props.store.grouped(grouping), grouping: grouping});
  }

  toggleComplete(id) {
    this.props.store.toggleComplete(id);
    this.setState({todos: this.props.store.grouped(this.state.grouping)});
  }

  render() {
    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu handleGroupChangeFn={this.handleGroupChange.bind(this)} />}
        />
        <ListArea toggleCompleteFn={this.toggleComplete.bind(this)} todos={this.state.todos} />
        <AddTodo addTodoFn={this.addTodo.bind(this)} />
      </div>
    );
  }
}

export default Todolist;
