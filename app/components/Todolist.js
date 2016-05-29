import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import TodolistIconMenu from './topbar/TodolistIconMenu';

import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Todolist = () => (
  <div>
    <AppBar title="Todolist"
      showMenuIconButton={false}
      iconElementRight={<TodolistIconMenu />}
    />
  </div>
);

export default Todolist;

