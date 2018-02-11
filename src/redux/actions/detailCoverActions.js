export const input_data_detail_cover = dataDetailCover => {
  return (dispatch, getState) => {
    console.log('ini actions', dataDetailCover)
    dispatch({
      type: 'ADD_DETAIL_COVER',
      payload: { cover }
    })
  }
}
