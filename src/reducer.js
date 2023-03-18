function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    // case "SET_DATA":
    //   return {
    //     ...state,
    //     data: action.payload,
    //     isLoading: false,
    //   };
    case "SET_OTHER_DATA":
      return { ...state, data: action.payload, isLoading: false };
    case "CHANGE_QUERY":
      return { ...state, query: action.payload, page: 0 };
    case "INC":
      let tempPage = state.page + 1;
      if (tempPage > action.payload - 1) {
        return { ...state, page: 0 };
      } else {
        return { ...state, page: tempPage };
      }
    case "DEC":
      let tempPag = state.page - 1;
      if (tempPag < 0) {
        return { ...state };
      } else {
        return { ...state, page: tempPag };
      }
  }
}

export default reducer;
