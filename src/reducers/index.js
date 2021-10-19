const initialState = {
  name: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_SET_YEAR':
      return {
        ...state,
        year: action.payload,
      };

    default:
      return state;
  }
} 

export default reducer;