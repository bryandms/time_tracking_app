import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'

class TimersDashboard extends Component {
  render() {
    return (
      <Grid columns={3} centered>
        <Grid.Column>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimersDashboard
