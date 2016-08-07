import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {Tabs, Tab} from 'material-ui/Tabs';
import TodayIcon from 'material-ui/svg-icons/action/today';
import AllIcon from 'material-ui/svg-icons/places/all-inclusive';

import { TODAY, TOMORROW, THIS_WEEK, ALL } from '../constants';
import { fetchTodos  } from '../actions/todo_actions';

export default class TodoTabs extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleChange(due) {
    const { show, group } = this.props;
    this.context.router.push(`/${show}/${due}/${group}`)
  }

  getSelectedIndex() {
    switch(this.props.due) {
      case TODAY: return 0;
      case TOMORROW: return 1;
      case THIS_WEEK: return 2;
      case ALL: return 3;
    }
  }

  render() {
    return(
      <Tabs ref="tabs" initialSelectedIndex={this.getSelectedIndex()} onChange={this.handleChange.bind(this)}>
        <Tab
          icon={<TodayIcon />}
          label="Today"
          value={TODAY}
        />
        <Tab
          icon={<TodayIcon />}
          label="Tomorrow"
          value={TOMORROW}
        />
        <Tab
          icon={<TodayIcon />}
          label="This week"
          value={THIS_WEEK}
        />
        <Tab
          icon={<AllIcon />}
          label="All todos"
          value={ALL}
        />
      </Tabs>
    )
  }
}
