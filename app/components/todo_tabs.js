import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import { TODAY, TOMORROW, THIS_WEEK, ALL, SHOW_UNARCHIVED } from '../constants'

export default class TodoTabs extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object,
    }
  }

  static get propTypes() {
    return {
      due: PropTypes.string,
      group: PropTypes.string,
      show: PropTypes.string,
    }
  }

  static get defaultProps() {
    return {
      show: SHOW_UNARCHIVED,
      due: ALL,
      group: ALL,
    }
  }

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  getSelectedIndex() {
    switch (this.props.due) {
      case TODAY: return 0
      case TOMORROW: return 1
      case THIS_WEEK: return 2
      case ALL: return 3
      default: return 3
    }
  }

  getDueFromIndex(idx) {
    switch (idx) {
      case 0: return TODAY
      case 1: return TOMORROW
      case 2: return THIS_WEEK
      case 3: return ALL
      default: return ALL
    }
  }

  handleChange(dueIdx) {
    const { show, group } = this.props
    const due = this.getDueFromIndex(dueIdx)
    this.context.router.push(`/${show}/${due}/${group}`)
  }

  render() {
    return (
      <Tabs id="main-tabs" activeKey={this.getSelectedIndex()} onSelect={this.handleChange}>
        <Tab eventKey={0} title="Today"></Tab>
        <Tab eventKey={1} title="Tomorrow"></Tab>
        <Tab eventKey={2} title="This week"></Tab>
        <Tab eventKey={3} title="All"></Tab>
      </Tabs>
    )
  }
}
