// modulos requeridos
const express = require('express');
const path = require('path') //para concatenar y buscar la carpeta views
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')//conecion con myaql

const App = express();

//importando rutas
const CustomerRoutes = require('./routes/Customer')

//configuracion 
App.set('port', process.env.PORT || 3000);
App.set('view engine', 'ejs');
App.set('views', path.join(__dirname, 'views')) //buscsar la carpeta views



//middlewares
App.use(morgan('dev')); // para ver las peticiones
App.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'crud'
}, 'single'))

App.use(express.urlencoded({extends: false}))

//rutas
App.use('/', CustomerRoutes)

//archivos estaticos
App.use(express.static(path.join(__dirname, 'public')))

//iniciar el servidor 

App.listen(App.get('port'), () => {
    console.log('server onport 3000')
})