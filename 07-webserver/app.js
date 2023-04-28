const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send('Home');
});

app.get('/hola-mundo', (req,res) => {
    res.send('Hola mundo');
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});