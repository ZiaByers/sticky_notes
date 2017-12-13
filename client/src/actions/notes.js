export const addNote = (note) => {
  return { type: 'ADD_NOTE', note }
}

export const deleteNote = (id) => {
  return { type: 'DELETE_NOTE', id }
}
