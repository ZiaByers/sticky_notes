const nextId = ( state = 1, action ) => {
  switch(action.type) {
    case 'INC_ID':
      return state + 1
    default:
      return state
  }
}

export default nextId
