const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Learning API',
    description: 'Auto-generated documentation',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const routes = ['./app.js']; 

swaggerAutogen(outputFile, routes, doc);