import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'

import TimerForm from '../EditableTimerList/EditableTimer/TimerForm/TimerForm'

class ToggleableTimerForm extends Component {
  state = {
    isOpen: false
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true })
  }

  handleFormClose = () => {
    this.setState({ isOpen: false })
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer)
    this.setState({ isOpen: false })
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose} />
      )
    } else {
      return (
        <Segment basic textAlign='center'>
          <Button
            basic
            color='blue'
            circular
            icon='plus'
            onClick={this.handleFormOpen} />
        </Segment>
      )
    }
  }
}

export default ToggleableTimerForm
