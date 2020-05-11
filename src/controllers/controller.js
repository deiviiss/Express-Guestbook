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

//index
controller.inicio = (req, res) => {

  res.render('index')
};

//consulta a database
controller.consultaDB = (req, res) => {

  req.getConnection((err, conn) => { // conexión
    conn.query('SELECT * FROM clientes', (err, rows_clientes) => { // show clients

      if (err) {
        res.json(err);
      }
      console.log(rows_clientes)
      res.render('search-register', {
        data: rows_clientes
      });
    });

  });
};

//registro

controller.registerDB = (req, res) => {

  req.getConnection((err, conn) => { // conexión
    conn.query('SELECT * FROM clientes', (err, rows_clientes) => { // show clients

      if (err) {
        res.json(err);
      }
      console.log(rows_clientes)
      res.render('new-register', {
        data: rows_clientes
      });
    });

  });
};
module.exports = controller;