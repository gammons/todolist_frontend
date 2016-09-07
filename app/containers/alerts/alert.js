import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { dismissAlert } from '../../actions/alert_actions'

import styles from './alert.css'

class Alert extends Component {
  static get propTypes() {
    return {
      dismissAlert: PropTypes.func,
      id: PropTypes.number,
      body: PropTypes.string,
      idx: PropTypes.number,
    }
  }

  componentWillMount() {
    setTimeout(this.props.dismissAlert, 2000)
  }

  render() {
    return (
      <div style={{ top: (10 + (50 * this.props.idx)) }} className={styles.confirmationAlert}>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default connect(null, { dismissAlert })(Alert)
