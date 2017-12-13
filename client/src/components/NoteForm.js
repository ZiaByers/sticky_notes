import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
import { incId } from '../actions/nextId'
import '../App.css'



class NoteForm extends React.Component {
  state = { title: '', body: '', color: 'yellow' }

  options = () => {
    return(
      [
        { key: 'b', text: 'Blue', value: 'blue' },
        { key: 'y', text: 'Yellow', value: 'yellow' },
        { key: 'p', text: 'Pink', value: 'pink' },
      ]
    )
}
  handleSubmit = (e) => {
    e.preventDefault()
    const { title, body, color } = this.state
    const { id, dispatch } = this.props
    const note = { id, title, body, color }
    dispatch(addNote(note))
    dispatch(incId())
    this.setState({ title: '', body: '' })
  }

  handleChange = (_, { name, value }) => this.setState({ [name]: value})

  render() {
    const { title, body } = this.state
    return(
      <Segment compact>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input required label='Title' name='title' value={title} onChange={this.handleChange}></Form.Input>

          <Form.Input maxLength='30' required label='Body' name='body' value={body} onChange={this.handleChange}></Form.Input>

          <Form.Select label='Color' name='color' options={this.options()} placeholder='Color' onChange={this.handleChange}/>

          <Button primary type='submit'>Save</Button>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm)
