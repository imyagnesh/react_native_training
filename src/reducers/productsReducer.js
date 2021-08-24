const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return {...state, loading: true};

    case 'LOAD_PRODUCTS_SUCCESS':
      return {...state, loading: false, data: [...state.data, ...payload]};

    case 'LOAD_PRODUCTS_FAIL':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};
