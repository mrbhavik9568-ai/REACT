const initialState = {
  offers: [],
  loading: false,
}

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_OFFERS_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_OFFERS_SUCCESS':
      return {
        ...state,
        loading: false,
        offers: action.payload,
      }
    default:
      return state
  }
}

export default offersReducer
