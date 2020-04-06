var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Axios
var axios = require("axios").default;
axios.defaults.baseURL =
  "https://integracion-rick-morty-api.herokuapp.com/api/";

var indexRouter = require("./routes/index");
var pjRouter = require("./routes/pj");
var episodioRouter = require("./routes/episodio");
var lugarRouter = require("./routes/lugar");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/episodio", episodioRouter);
app.use("/pj", pjRouter);
app.use("/lugar", lugarRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use(axios);

module.exports = app;
