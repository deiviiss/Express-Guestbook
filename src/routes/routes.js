/*
#  ·················
#        ________
#       /./·___/·
#    __/./__··)·
#   /___/____/·
#  ·················
*/
//depends
const express = require('express');
const router = require('express').Router(); //Modulo de express devuelve un objeto para listar rutas.

//controladores
const customerController = require('../controllers/Controller'); //llama a los controladores.

//routes
router.get('/', customerController.inicio)
router.get('/search-register', customerController.consultaDB)
router.get('/new-register', customerController.registerDB)

module.exports = router; //exports routes