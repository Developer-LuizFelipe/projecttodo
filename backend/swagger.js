const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',            
    title: 'Tasks API REST',              
    description: 'Nodejs Express + MongoDB API REST'       
  },
  basePath: '/task/',
  host: 'localhost:3000',                 
  schemes: ['http'],            
};

const outputFile = './swagger-output.json';
const routes = [' ./routes/taskRoute.js'];


swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./index.js'); 
  });