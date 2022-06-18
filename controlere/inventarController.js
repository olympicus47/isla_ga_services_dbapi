const express = require('express');
const router = express.Router();
const servicii = require('../_helpers/servicii db');
// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');

// routes
router.post('/inventar/adauga',()=>{console.log('/inventar/adauga')})
router.get('/inventar', ()=>{console.log('/inventar')});
router.put('/inventar/modifica/:id', ()=>{console.log('/inventar/modifica/:id')});
router.delete('/inventar/sterge/:id', ()=>{console.log('/inventar/sterge/:id')});

module.exports = router;

