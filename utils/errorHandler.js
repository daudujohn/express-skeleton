function errorHandler(error, req, res, next) {
  if (error) {
    console.error(error);
    return res
      .status(500)
      .send(
        "Something went wrong from our end. Hold on, we're trying to fix it"
      );
  }
}

module.exports = { errorHandler };
