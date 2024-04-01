const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use(express(express.json));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000');
});

//Prueba de conexion al DOM
/* app.get('/',(req, res)=>{
    res.send('hola')
}); */