/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/

const express = require('express');
const router = require('express').Router(); //Modulo de express devuelve un objeto para listar rutas.

//dependends
// const { Router } = require('express') //solicita el método router del módulo express
// const router = Router() //guardamos el objeto router

const customerController = require('../controllers/Controller'); //llama a los controladores.
// const { renderIndex,
// renderNewEntry,
// createNewEntry, } = require('../controllers/controller') //llama a los controladores

//routes
//router.get('/', renderIndex);
//router.get('/new-entry', renderNewEntry)
// router.post('/new-entry', createNewEntry)
router.get('/', customerController.consultaDB)

module.exports = router; //exports routes