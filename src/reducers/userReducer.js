const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_USER_REQUEST':
      return {...state, loading: true};

    case 'LOAD_USER_SUCESS':
      return {...state, loading: false, data: payload};

    case 'LOAD_USER_SUCESS':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};
