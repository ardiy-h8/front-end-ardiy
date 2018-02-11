const initialState = {
  cover: [
    {
      title: 'Monster Ink',
      image: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
    }
  ]
}

const detailCoverReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DETAIL_COVER':
      return { ...state, cover: state.cover.concat(action.payload.cover) }
    default:
      return state
  }
}

export default detailCoverReducers
