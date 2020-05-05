/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

//dependends
const { Router } = require('express') //solicita el método router del módulo express
const router = Router() //guardamos el objeto router

const { renderIndex,
  renderNewEntry,
  createNewEntry } = require('../controllers/controller') //llama a los controladores

//routes
router.get('/', renderIndex);
router.get('/new-entry', renderNewEntry)
router.post('/new-entry', createNewEntry)

module.exports = router; //exports routes