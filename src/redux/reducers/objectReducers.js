const initialState = {
  object: []
}

const objectReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return { ...state, object: state.object.concat(action.payload.object) }
    default:
      return state
  }
}

export default objectReducers
