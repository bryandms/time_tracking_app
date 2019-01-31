import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import uuid from 'uuid'

import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now()
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid.v4(),
        elapsed: 1273998,
        runningSince: null
      }
    ]
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer)
  }

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs)
  }

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId)
  }

  createTimer = (timer) => {
    const t = window.helpers.newTimer(timer)
    this.setState({
      timers: this.state.timers.concat(t)
    })
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    })
  }

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project
          })
        } else {
          return timer
        }
      })
    })
  }

  render() {
    return (
      <Grid columns={3} centered>
        <Grid.Column>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick} />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimersDashboard
