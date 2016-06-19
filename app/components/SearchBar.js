import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import FilterActionCreators from '../actions/FilterActionCreators';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    let doSearch = (val) => { FilterActionCreators.search(val); }
    this.dispatchSearch = _.throttle(doSearch, 1000);
  }
  handleChange(proxy, val) {
    this.dispatchSearch(val);
  }
  render() {
    return(
      <Toolbar>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField hintText="Search" onChange={this.handleChange.bind(this)} fullWidth={true} underlineShow={false} />
      </Toolbar>
    )
  }
}

