const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 5;

crearArchivo(base)
    .then(nombre => console.log(nombre, 'creado'))
    .catch(err => console.log(err));
