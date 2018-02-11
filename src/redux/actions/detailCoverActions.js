export const input_data_detail_cover = cover => {
  return (dispatch, getState) => {
    console.log('ini actions', cover)
    dispatch({
      type: 'ADD_DETAIL_COVER',
      payload: { cover }
    })
  }
}

export const input_data_object = object => {
  return (dispatch, getState) => {
    console.log('ini actions', object)
    dispatch({
      type: 'ADD_OBJECT',
      payload: { object }
    })
  }
}
