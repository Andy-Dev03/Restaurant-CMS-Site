if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = require("./routers/router");
const app = express();
const port = 3000;
const { isError } = require("./middlewares/error");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

//Middleware for error
app.use(isError);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
