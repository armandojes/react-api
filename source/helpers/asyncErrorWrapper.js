const asyncErrorWrapper = (asyncHandler) => async (request, response, next) => {
  console.log(asyncHandler);
  try {
    await asyncHandler(request, response);
  } catch (error) {
    next(error);
  }
};

export default asyncErrorWrapper;
