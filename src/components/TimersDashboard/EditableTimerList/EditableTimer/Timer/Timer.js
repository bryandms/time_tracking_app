import React, { Component } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

class Timer extends Component {
  render() {
    const elapsedString = window.helpers.renderElapsedString(this.props.elapsed)

    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Meta>
            {this.props.project}
          </Card.Meta>
          <Card.Description centered>
            <h2>
              {elapsedString}
            </h2>
          </Card.Description>
          <Card.Content extra>
            <span className='right floated edit icon'>
              <Icon name='edit' />
            </span>
            <span className='right floated trash icon'>
              <Icon name='trash' />
            </span>
          </Card.Content>
        </Card.Content>
        <Button basic color='blue' attached='bottom'>
          Start
        </Button>
      </Card>
    )
  }
}

export default Timer
