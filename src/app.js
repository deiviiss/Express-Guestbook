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

//initializations
const app = express() //objeto de express

//settings
app.set('port', process.env.PORT || 3000) //puerto del servidor
app.set('views', path.join(__dirname, 'views')) //ruta para las vistas mediante _dirname
app.set('view engine', 'ejs') //motor de plantillas

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.use(require('./routes/routes'))

//404   handler
app.use((req, res) => {
  res.status(404).render('404');
})

//starting the app

app.listen(app.get('port'), () => {
  console.log('server on port: ', app.get('port'))
})