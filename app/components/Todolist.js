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

class Todolist extends React.Component {
  render() {
    return(
      <div>
        <AppBar title="Todolist"
          showMenuIconButton={false}
          iconElementRight={<TodolistIconMenu />}
        />

        <TodoTabs />
        <SearchBar />
        <ListArea />
        <AddTodo />
        <FailWhale />
        <DialogPrompt />
        <AddEditTodoDialog />
      </div>
    );
  }
}

export default Todolist;
