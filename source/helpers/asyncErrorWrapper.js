const asyncErrorWrapper = (asyncHandler) => async (request, response, next) => {
  console.log(asyncHandler);
  try {
    await asyncHandler(request, response, next);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default asyncErrorWrapper;
