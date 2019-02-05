import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

import EditableTimer from './EditableTimer/EditableTimer'

class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick} />
    ))

    return (
      <div id='timers'>
        {
          timers.length ?
          timers :
          <Header className='mt' as='h2' icon textAlign='center'>
            <Icon name='clock outline' disabled />
            <Header.Subheader>There are no timers.</Header.Subheader>
          </Header>
        }
      </div>
    )
  }
}

export default EditableTimerList
