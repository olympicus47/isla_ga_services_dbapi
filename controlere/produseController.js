const express = require('express');
const router = express.Router();
const servicii = require('../_helpers/servicii db');
// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');

// routes
router.post('/produse/adauga',()=>{console.log('/produse/adauga')})
router.get('/produse', ()=>{console.log('/produse')});
router.put('/produse/modifica/:id', ()=>{console.log('/produse/modifica/:id')});
router.delete('/produse/sterge/:id', ()=>{console.log('/produse/sterge/:id')});

module.exports = router;

