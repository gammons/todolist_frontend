import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TodayIcon from 'material-ui/svg-icons/action/today';
import AllIcon from 'material-ui/svg-icons/places/all-inclusive';

import Constants from "../constants/Constants";
//import FilterActionCreators from "../actions/FilterActionCreators";

export default class TodoTabs extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  handleChange(value) {
    //FilterActionCreators.changeDueFilter(value);
    this.context.router.push("/due/"+value);
  }

  getSelectedIndex() {
    switch(this.props.selected) {
      case "today":
        return 0;
      case "tomorrow":
        return 1;
      case "this_week":
        return 2;
      case "all":
        return 3;
    }
  }

  render() {
    return(
      <Tabs ref="tabs" initialSelectedIndex={this.getSelectedIndex()} onChange={this.handleChange.bind(this)}>
        <Tab
          icon={<TodayIcon />}
          label="Today"
          value={Constants.TODAY}
        />
        <Tab
          icon={<TodayIcon />}
          label="Tomorrow"
          value={Constants.TOMORROW}
        />
        <Tab
          icon={<TodayIcon />}
          label="This week"
          value={Constants.THIS_WEEK}
        />
        <Tab
          icon={<AllIcon />}
          label="All todos"
          value={Constants.ALL}
        />
      </Tabs>
    )
  }
}
