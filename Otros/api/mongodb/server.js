const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();
const port = 3030;

app.use(express.json());
mongoose.set('strictQuery', false);

app.use('/api', apiRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/devlights', (error) => {
    if (error) {
        console.log('Error de conexion a MongoDB', error);
    }
    else {
        console.log('Conectado a MongoDB');
    }
});

app.listen(port, () => {
    console.log(`Server en puerto: ${port}`)
});