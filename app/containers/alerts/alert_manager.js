import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Alert from './alert'

class AlertManager extends Component {
  static get propTypes() {
    return {
      alerts: PropTypes.object,
    }
  }

  renderAlert(alert, idx) {
    return <Alert key={idx} id={alert.id} body={alert.body} idx={idx} />
  }

  render() {
    return (
      <div>
        {this.props.alerts.openAlerts.map(this.renderAlert)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts,
  }
}

export default connect(mapStateToProps)(AlertManager)
