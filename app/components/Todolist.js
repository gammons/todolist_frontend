import React from 'react';
import AppBar from 'material-ui/AppBar';

import TodolistIconMenu from './topbar/TodolistIconMenu';

const Todolist = () => (
  <div>
    <AppBar title="Todolist"
      showMenuIconButton={false}
      iconElementRight={<TodolistIconMenu />}
    />
  </div>
);

export default Todolist;

