const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productsRouters')
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
app.set('query parser', 'extended');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter)

app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Route ${req.originalUrl} not found on this server`,
  });
});

module.exports = app;