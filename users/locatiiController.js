const express = require('express');
const router = express.Router();
// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');

// routes
router.post('/locatii/adauga', registerSchema, register);
router.get('/locatii', getAll);
router.put('/locatii/modifica/:id', authorize(), updateSchema, update);
router.delete('/locatii/sterge/:id', authorize(), _delete);

module.exports = router;

