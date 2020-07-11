const apiRouter = require("express").Router();
require('dotenv').config();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const prodRouter = require("./product");
apiRouter.use("/products", prodRouter);

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const taxRouter = require("./tax");
apiRouter.use("/tax", taxRouter);

const reviewRouter = require("./reviews");
apiRouter.use("/reviews", reviewRouter);

apiRouter.use((err, req, res, next) => {
  res.send(err)
})

module.exports = apiRouter;
                       