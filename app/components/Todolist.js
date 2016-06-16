import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';
import ListArea from './ListArea';
import AddTodo from './AddTodo';
import TodoTabs from './TodoTabs';


class Todolist extends React.Component {
  render() {
    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu />}
        />

        <TodoTabs />

        <ListArea />
        <AddTodo />
      </div>
    );
  }
}

export default Todolist;
