import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'

class TimersDashboard extends Component {
  state = {
    timers: []
  }

  componentDidMount() {
    this.loadTimersFromServer()
    setInterval(this.loadTimersFromServer, 5000)
  }

  loadTimersFromServer = () => {
    window.client.getTimers((serverTimers) => (
      this.setState({ timers: serverTimers })
    ))
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

  handleStartClick = (timerId) => {
    this.startTimer(timerId)
  }

  handleStopClick = (timerId) => {
    this.stopTimer(timerId)
  }

  createTimer = (timer) => {
    const t = window.helpers.newTimer(timer)
    this.setState({
      timers: this.state.timers.concat(t)
    })

    window.client.createTimer(t)
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    })

    window.client.deleteTimer(
      { id: timerId }
    )
  }

  startTimer = (timerId) => {
    const now = Date.now()

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now
          })
        } else {
          return timer
        }
      })
    })

    window.client.startTimer(
      { id: timerId, start: now }
    )
  }

  stopTimer = (timerId) => {
    const now = Date.now()

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince

          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null
          })
        } else {
          return timer
        }
      })
    })

    window.client.stopTimer(
      { id: timerId, stop: now }
    )
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

    window.client.updateTimer(attrs)
  }

  render() {
    return (
      <Grid columns={3} centered>
        <Grid.Column>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick} />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimersDashboard
