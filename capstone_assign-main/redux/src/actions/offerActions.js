export const fetchOffers = () => (dispatch) => {
  dispatch({ type: 'FETCH_OFFERS_REQUEST' })

  setTimeout(() => {
    const offers = ['10% OFF', 'Buy 1 Get 1', 'Free Shipping']
    dispatch({
      type: 'FETCH_OFFERS_SUCCESS',
      payload: offers,
    })
  }, 2000)
}
