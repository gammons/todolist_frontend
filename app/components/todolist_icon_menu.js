import React, { Component, PropTypes } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import DoneAllIcon from 'material-ui/svg-icons/action/done-all';
import Divider from 'material-ui/Divider';
import Checked from 'material-ui/svg-icons/navigation/check';

import { ALL, BY_CONTEXT, BY_PROJECT, SHOW_ARCHIVED, SHOW_UNARCHIVED } from '../constants';

export default class TodolistIconMenu extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  checkedIcon(val, prop) {
    if (val === prop)
      return <Checked />
  }

  handleChange(e,value) {
    const { show, due, group } = this.props;
    if (value == ALL || value == BY_CONTEXT | value == BY_PROJECT) {
      this.context.router.push(`/${show}/${due}/${value}`)
    } else {
      this.context.router.push(`/${value}/${due}/${group}`)
    }
  }

  render() {
    return(
      <div>
        <IconMenu
          iconButtonElement={<IconButton iconStyle={{fill: "#ffffff"}} ><SortIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem leftIcon={this.checkedIcon(ALL, this.props.group)} insetChildren={true} primaryText="No grouping" value={ALL} />
          <MenuItem leftIcon={this.checkedIcon(BY_CONTEXT, this.props.group)} insetChildren={true} primaryText="By Context" value={BY_CONTEXT} />
          <MenuItem leftIcon={this.checkedIcon(BY_PROJECT, this.props.group)} insetChildren={true} primaryText="By Project" value={BY_PROJECT} />
          <Divider />
          <MenuItem leftIcon={this.checkedIcon(SHOW_UNARCHIVED, this.props.show)} insetChildren={true} primaryText="Unarchived" value={SHOW_UNARCHIVED} />
          <MenuItem leftIcon={this.checkedIcon(SHOW_ARCHIVED, this.props.show)} insetChildren={true} primaryText="Archived" value={SHOW_ARCHIVED} />
        </IconMenu>
        <IconButton iconStyle={{fill: "#ffffff"}} ><DoneAllIcon /></IconButton>
      </div>

    )

  }
}

