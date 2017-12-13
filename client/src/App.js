import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Segment Align='center' basic>
          <NoteForm />
        <NoteList />
        <Segment basic>
          <Footer />
        </Segment>
      </Segment>
    )
  }
}

export default App;
