import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

import TimerActionButton from './TimerActionButton/TimerActionButton'

class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval)
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id)
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id)
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id)
  }

  render() {
    const elapsedString = window.helpers.renderElapsedString(
      this.props.elapsed, this.props.runningSince
    )

    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Meta>
            {this.props.project}
          </Card.Meta>
          <Card.Description textAlign='center'>
            <h2>
              {elapsedString}
            </h2>
          </Card.Description>
          <Card.Content extra>
            <span
              className='right floated edit icon'
              onClick={this.props.onEditClick}>
              <Icon name='edit' />
            </span>
            <span className='right floated trash icon'
              onClick={this.handleTrashClick}>
              <Icon name='trash' />
            </span>
          </Card.Content>
        </Card.Content>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick} />
      </Card>
    )
  }
}

export default Timer
