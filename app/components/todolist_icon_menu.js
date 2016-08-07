import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';
import Divider from 'material-ui/Divider';

export default class TodolistIconMenu extends Component {
  render() {
    return(
      <div>
        <IconMenu
          iconButtonElement={<IconButton iconStyle={{fill: "#ffffff"}} ><SortIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem insetChildren={true} primaryText="No grouping" />
          <MenuItem insetChildren={true} primaryText="By Context" />
          <MenuItem insetChildren={true} primaryText="By Project" />
          <Divider />
          <MenuItem insetChildren={true} primaryText="Unarchived" />
          <MenuItem insetChildren={true} primaryText="Archived" />
        </IconMenu>
        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>

    )

  }
}

