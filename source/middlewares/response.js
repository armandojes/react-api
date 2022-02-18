const response = (_req, res, next) => {
  const success = (payload, responseCode = 200) => {
    res.status(responseCode);
    res.json({
      ...payload,
      error: false,
    });
    res.end();
  };

  const error = (errorMessage, errorCode = 500, payload = {}) => {
    let errorMessageFormated;
    if (typeof errorMessage === 'string') {
      errorMessageFormated = errorMessage;
    } else if (Array.isArray(errorMessage) && errorMessage.length === 1) {
      [errorMessageFormated] = errorMessage;
    } else {
      errorMessageFormated = errorMessage;
    }

    res.status(errorCode);
    res.json({
      ...payload,
      error: true,
      errorMessage: errorMessageFormated,
    });
    res.end();
  };

  res.success = success;
  res.error = error;
  next();
};

export default response;
