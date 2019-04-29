const asyncMiddleware = store => next => action => {
  const isRequestAction = typeof action.type === "object" && !!action.request;

  if (!isRequestAction) {
    return next(action);
  }
  const {
    REQUEST,
    SUCCESS,
    FAILURE
  } = action.type;
  next({
    type: REQUEST,
    payload: {
      isLoading: true,
      error: false
    }
  });

  return action.request()
    .then(data => {
      next({
        type: SUCCESS,
        payload: {
          ...data,
          isLoading: false,
          error: false
        }
      });
    }).catch(e => {
      next({
        type: FAILURE,
        payload: {
          isLoading: false,
          error: true,
        }
      });
    });
}

export default asyncMiddleware;