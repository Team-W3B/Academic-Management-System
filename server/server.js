//모듈
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const crypto = require("crypto");

//라우터
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const homeRouter = require("./routes/home");
const lecRouter = require("./routes/lecpage");

//상수
const db = require("./models");
const app = express();
db.sequelize.sync();
const secret = crypto.randomBytes(64).toString("hex");

//미들웨어
app.use(logger("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // 클라이언트쪽 URL
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "server")));
app.use(
  session({
    name: "loginSession",
    secret: secret, // 암호화하는 데 쓰일 키
    resave: false, // 세션을 언제나 저장할지 설정함
    saveUninitialized: false, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
    store: new FileStore(),
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    proxy: true,
  })
);

//client의 proxy에 대한 주소
app.use("/api/login", loginRouter);
app.use("/api/signup", signupRouter);
app.use("/api/home", homeRouter);
app.use("/api/lecpage", lecRouter);

//app.use("/api", loginRouter);

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

module.exports = app;
