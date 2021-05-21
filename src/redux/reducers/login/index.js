const initialState = {
  checkToken: false,
};

export default (state = initialState, {payload, type}) => {

  switch (type) {
    case 'CHECK_TOKEN':
      return {
        ...state,
        checkToken:payload
      };
    default:
      return state;
  }
}

