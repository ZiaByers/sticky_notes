import React from 'react'
import { Grid, Segment, Header, Button } from 'semantic-ui-react'
import { deleteNote } from '../actions/notes'
import { connect } from 'react-redux'

const handleClick = (id, dispatch) => {
  window.confirm('Are you sure?')
  dispatch(deleteNote(id))
}

const Note = ({ id, title, body, color, dispatch }) => (
  <Grid.Column width={4}>
    <Segment inverted color={color}>
      <Header textAlign='center' as='h4'>{title}</Header>
      <Segment basic textAlign='center'>{body}</Segment>
      <Button negative onClick={() => handleClick(id, dispatch)}>Delete</Button>
    </Segment>
  </Grid.Column>
)

export default connect()(Note)
