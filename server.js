const express = require('express');
const app = express();
const hbs = require('hbs');
require('./views/hbs/helpers');

// esto es para que obtenga el puerto de Heroku al desplegarlo en el servidor,sino coge por defecto el 3000
const port = process.env.PORT || 3000;

// esto seria para poner por defecto una pagina con localhost:3000
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    // renderizamos el home.hbs
    res.render('home', {
        nombre: 'Rafa'
            /* , // se sustituye por el helper getAnio()
                    anio: new Date().getFullYear() */
    });
});

app.get('/about', function(req, res) {

    // renderizamos el home.hbs
    res.render('about'
        /* , {
                anio: new Date().getFullYear()
            } */
    );
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});