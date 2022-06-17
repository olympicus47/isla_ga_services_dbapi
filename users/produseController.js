const express = require('express');
const router = express.Router();
// const Joi = require('joi');
// const validateRequest = require('_middleware/validate-request');

// routes
router.post('/produse/adauga', registerSchema, register);
router.get('/produse', authorize(), getAll);
router.put('/produse/modifica/:id', authorize(), updateSchema, update);
router.delete('/produse/sterge/:id', authorize(), _delete);

module.exports = router;

