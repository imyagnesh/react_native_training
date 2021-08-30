const logMiddleware = storeAPI => next => action => {
  // Do something in here, when each action is dispatched

  console.log('action', action);

  return next(action);
};

export default logMiddleware;
