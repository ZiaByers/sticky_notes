const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return [...state, action.note]
    case 'DELETE_NOTE':
      return state.filter( note => note.id !== action.id )
    default:
      return state
  }
}

export default notes
