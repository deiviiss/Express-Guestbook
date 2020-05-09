/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

//dependends
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//initializations
const app = express() //objeto de express

//settings
app.set('port', process.env.PORT || 3000) //puerto del servidor
app.set('views', path.join(__dirname, 'views')) //ruta para las vistas mediante _dirname
app.set('view engine', 'ejs') //motor de plantillas

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) //metodo de express que permite entender los datos.


//static files
app.use(express.static(path.join(__dirname, 'public')))

//404   handler
// app.use((req, res) => {
//   res.status(404).render('404');
// })

//conection database
app.use(myConnection(mysql, {
  host: 'dbgestoria.mysql.database.azure.com',
  user: 'davidHilera@dbgestoria',
  password: '@zure2020',
  port: 3306,
  database: 'tramites'
}, 'single')
);

//routes
app.use('/', require('./routes/routes'))

//starting the app

app.listen(app.get('port'), () => {
  console.log('server on port: ', app.get('port'))
})