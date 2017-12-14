import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Note from './Note'
import { getNotes } from '../actions/notes'



class NoteList extends React.Component {

  componentDidMount() {
    this.props.dispatch(getNotes())
  }

  filtered = (notes, activeFilter) => {
    switch(activeFilter){
      case 'All':
        return notes
      default:
        return notes.filter( n => n.color === activeFilter )
    }
  }

  render() {
    const { notes, filter, dispatch } = this.props
    return(
      <Grid>
        { this.filtered(notes, filter).map( note => <Note key={note.id} {...note} /> )}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter}
}

export default connect(mapStateToProps)(NoteList)
