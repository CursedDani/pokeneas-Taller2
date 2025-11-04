const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokeneaRoutes');

const app = express();
const PORT = 80;

app.use(express.json());
app.use(express.static('public'));
app.use("", pokeneaRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.send("Hello from Express");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Container ID: ${process.env.HOSTNAME || 'local'}`);
});