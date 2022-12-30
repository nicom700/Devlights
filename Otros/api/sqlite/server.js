const express = require('express');
const apiRoutes = require('./routes');
const db = require('./models');

const app = express();
const port = 3030;

app.use(express.json());

app.use('/api', apiRoutes);

db.sync().then(() => {
    console.log('Conectado a SQLite');
}).catch(() => {
    console.log('Error de conexion a SQLite');
})

app.listen(port, () => {
    console.log(`Server en puerto: ${port}`)
});