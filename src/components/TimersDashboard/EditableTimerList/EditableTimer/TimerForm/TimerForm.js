import React, { Component } from 'react'
import { Button, Card, Form } from 'semantic-ui-react'

class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create'

    return (
      <Card centered>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input type='text' defaultValue={this.props.project} />
            </Form.Field>
            <Button.Group attached='bottom'>
              <Button basic color='blue'>
                {submitText}
              </Button>
              <Button basic color='red'>
                Cancel
              </Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default TimerForm
