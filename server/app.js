const morgan = require("morgan");
const express = require("express");
const app = express();

//Handler errors
const globalErrorHandler = require("./middlewares/errorHandler");
const AppError = require("./utils/AppError");

//Rotas
const authRouter = require("./routes/authRoutes");
const soldierRouter = require("./routes/soldierRoutes");
const squadRouter = require('./routes/squadRoutes');
const userRouter = require('./routes/userRoutes');


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Mouting Routes..
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/soldier", soldierRouter)
app.use("/api/v1/squad", squadRouter)
app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 400));
});

//Global error Handler..
app.use(globalErrorHandler);

module.exports = app;
