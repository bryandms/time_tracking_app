import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class TimerActionButton extends Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <Button basic color='red' attached='bottom'
          onClick={this.props.onStopClick}>
          Stop
        </Button>
      )
    } else {
      return (
        <Button basic color='green' attached='bottom'
          onClick={this.props.onStartClick}>
          Start
        </Button>
      )
    }
  }
}

export default TimerActionButton
