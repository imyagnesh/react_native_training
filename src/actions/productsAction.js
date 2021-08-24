const wait = time =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

export const loadProducts = page => {
  return async dispatch => {
    try {
      const limit = 10;
      dispatch({type: 'LOAD_PRODUCTS_REQUEST'});
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
      );
      const json = await res.json();
      await wait(2000);
      dispatch({type: 'LOAD_PRODUCTS_SUCCESS', payload: json});
    } catch (error) {
      dispatch({type: 'LOAD_PRODUCTS_FAIL', payload: error});
    }
  };
};
