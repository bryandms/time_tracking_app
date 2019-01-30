import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'

import TimerForm from '../EditableTimerList/EditableTimer/TimerForm/TimerForm'

class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <Segment basic textAlign='center'>
          <Button basic icon='plus' />
        </Segment>
      )
    }
  }
}

export default ToggleableTimerForm
