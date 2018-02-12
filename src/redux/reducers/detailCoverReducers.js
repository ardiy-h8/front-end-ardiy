const initialState = {
  cover: [
    {
      title: 'Monster Ink',
      imagePreviewUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png',
      createdAt: new Date()
    },
    {
      title: 'Modern Architecture Aosdfjlskdjf',
      imagePreviewUrl: 'https://marketplace.canva.com/MACSXEOzaeQ/1/0/thumbnail_large/canva-orange-and-dark-purple-triangular-modern-architecture-book-cover-MACSXEOzaeQ.jpg',
      createdAt: new Date()
    },
    {
      title: 'Modern Architecture',
      imagePreviewUrl: 'https://i.pinimg.com/736x/2e/07/19/2e07195c27fbc430eba5e3d6fb021cf6--classic-literature-virgil.jpg',
      createdAt: new Date()
    },
    {
      title: 'Dota 2',
      imagePreviewUrl: 'https://pbs.twimg.com/profile_images/492086361101328384/QXvZaEnp.png',
      createdAt: new Date()
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
