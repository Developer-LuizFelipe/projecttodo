const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const taskRoute = require('./routes/taskRoute.js'); 
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors());

app.use("/task",taskRoute);

app.get("/", (req, res) => {
    res.send("Hello from node API")
});

mongoose.connect("mongodb+srv://user123:hXYns1dSzRhd2xMl@todo.9faau.mongodb.net/Node-API?retryWrites=true&w=majority&appName=todo")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    })