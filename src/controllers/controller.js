/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

//objeto
const controller = {};

// Funciones-métodos del objeto

//consulta a database
controller.consultaDB = (req, res) => {

  req.getConnection((err, conn) => { // conexión
    conn.query('SELECT * FROM clientes', (err, rows_clientes) => { // show clients

      if (err) {
        res.json(err);
      }
      console.log(rows_clientes)
      res.render('index', {
        data: rows_clientes
      });
    });

  });
};

module.exports = controller;

// //persistent data, recibe el arreglo
// const entries = [];

// //renderiza la vista principal al usuario
// const renderIndex = (req, res) => {
//   res.render('index', { entries })
// };

// //envía a la página con el formulario
// const renderNewEntry = (req, res) => {
//   res.render('new-entry')
// };

// //procesa la información del formulario y guarda
// const createNewEntry = (req, res) => {
//   //guarda los datos en un arreglo
//   const newClient = {
//     asesor: req.body.asesesor,
//     cliente: req.body.cliente,
//     curp: req.body.curp,
//     observaciones: req.body.observaciones,
//     date: new Date()
//   };

//   entries.push(newClient); //empuja los datos al arreglo
//   res.redirect('/') //direcciona a la vista principal
// };

// module.exports = {
//   renderIndex,
//   renderNewEntry,
//   createNewEntry
// }