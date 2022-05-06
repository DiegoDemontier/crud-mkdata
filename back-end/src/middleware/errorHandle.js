module.exports = (err, _req, res, _next) => {
  const message = {
    message: err.message,
  };

  if (err.status) {
    return res.status(err.status).json(message);
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};