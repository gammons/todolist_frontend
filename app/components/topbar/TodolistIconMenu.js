import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import SortIcon from 'material-ui/svg-icons/content/sort';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';

class TodolistIconMenu extends React.Component {
  render() {
    return(
      <div>
        <IconButton iconStyle={{fill: "#ffffff"}} ><SearchIcon /></IconButton>

        <IconMenu
          iconButtonElement={<IconButton iconStyle={{fill: "#ffffff"}} ><SortIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="No grouping" />
          <MenuItem primaryText="By Context" />
          <MenuItem primaryText="By Project" />
        </IconMenu>

        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>
    )
  }
}

export default TodolistIconMenu
