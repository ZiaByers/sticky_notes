import axios from 'axios'

export const getNotes = () => {
  return (dispatch) => {
    axios.get('/api/notes')
      .then( res => {
        dispatch({ type: 'NOTES', notes: res.data})
      })
  }
}

export const addNote = (note) => {
  return (dispatch) => {
    axios.post('/api/notes', { note })
      .then( res => {
        dispatch({ type: 'ADD_NOTE', note: res.data })
      })
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    axios.delete(`/api/notes/${id}`)
      .then( () => {
        dispatch({ type: 'DELETE_NOTE', id: id })
      })
  }
}
