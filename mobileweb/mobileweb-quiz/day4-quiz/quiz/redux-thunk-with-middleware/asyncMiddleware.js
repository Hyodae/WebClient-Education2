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

  // TODO: REQUEST Action을 호출한다.
  // isLoading: true,
  // error: false

  return action.request()
    .then(data => {
      // TODO: SUCCESS Action을 호출한다.
      // isLoading: false,
      // error: false
      // 성공시 완료된 데이터를 전달한다.
    }).catch(e => {
      // TODO: FAILURE Action을 호출한다.
      // isLoading: false,
      // error: false
    });
}

export default asyncMiddleware;