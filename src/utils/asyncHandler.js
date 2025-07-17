const asyncHandler = (requestHandler) => {
   (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  }
}

export { asyncHandler}


//or


/*
const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

*/