/**
 * Title: E-Commerce API
 * Author: Yasir Mansoori
 */

// Dependencies
const express = require('express');
const db = require("./src/db/db");
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoutes');
const cartRouter = require('./src/routes/cartRoutes');
const { verifyAccessToken } = require('./src/config/tokenGenerator');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const cookieParser = require('cookie-parser');

// Environment variables
const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = `${process.env.CONNECTION_URI}/${process.env.DATABASE_NAME}`;

// Connect the database
db.connect(CONNECTION_STRING)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// configure
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user authentication routes
app.use("/api/user/", userRouter);

// product routes
app.use("/api/product", productRouter);

// cart routes
app.use("/api/cart", cartRouter);

// Protected route
app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello Im a protected route');
})

// 404 Not Found middleware
app.use(notFoundMiddleware);

// Error Handling Middleware
app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

