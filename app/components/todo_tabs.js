import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';

import { TODAY, TOMORROW, THIS_WEEK, ALL, SHOW_UNARCHIVED } from '../constants';

export default class TodoTabs extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static defaultProps = {
    show: SHOW_UNARCHIVED,
    due: ALL,
    group: ALL
  };

  handleChange(dueIdx) {
    const { show, group } = this.props;
    let due = this.getDueFromIndex(dueIdx);
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

  getDueFromIndex(idx) {
    switch(idx) {
      case 0: return TODAY;
      case 1: return TOMORROW;
      case 2: return THIS_WEEK;
      case 3: return ALL;
    }
  }

  render() {
    return(
      <Tabs id="main-tabs" activeKey={this.getSelectedIndex()} onSelect={this.handleChange.bind(this)}>
        <Tab eventKey={0} title="Today"></Tab>
        <Tab eventKey={1} title="Tomorrow"></Tab>
        <Tab eventKey={2} title="This week"></Tab>
        <Tab eventKey={3} title="All"></Tab>
      </Tabs>
    )
  }
}
