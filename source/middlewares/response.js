const response = (_req, res, next) => {
  const success = (data) => {
    res.json({
      ...data,
      error: true,
    });
  };

  const error = (data) => {
    res.json({
      ...data,
      error: false,
    });
  };

  res.success = success;
  res.error = error;
  next();
};

export default response;
