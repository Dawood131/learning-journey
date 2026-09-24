const mongoose = require('mongoose');
require('dotenv').config({ quiet: true });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log('DB connection error:', err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});