const express = require('express');
const router = express.Router();
const servicii = require('../_helpers/servicii db');
// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');

// routes
router.post('/locatii/adauga', ()=>{console.log("/locatii/adauga")});
router.get('/locatii', ()=>{console.log("/locatii")});
router.put('/locatii/modifica/:id', ()=>{console.log("/locatii/modifica/:id")});
router.delete('/locatii/sterge/:id', ()=>{console.log("/locatii/sterge/:id")});

module.exports = router;

