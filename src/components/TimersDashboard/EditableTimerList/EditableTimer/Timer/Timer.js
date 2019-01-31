import React, { Component } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

class Timer extends Component {
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id)
  }

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
        <Button basic color='blue' attached='bottom'>
          Start
        </Button>
      </Card>
    )
  }
}

export default Timer
