const express = require("express");

const routes = () => {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.status(200).json("Welcome to my app");
  });

  //   Add your routes here e.g.
  //   router.use('/api/users', userRoutes)

  return router;
};

module.exports = { routes };
