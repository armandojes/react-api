const response = (_req, res, next) => {
  const success = (data) => {
    res.json({
      ...data,
      error: false,
    });
  };

  const error = (data) => {
    res.json({
      ...data,
      error: true,
    });
  };

  res.success = success;
  res.error = error;
  next();
};

export default response;
