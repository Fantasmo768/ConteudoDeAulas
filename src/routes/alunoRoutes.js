const express = require('express');
const alunoController = require('../controllers/alunoController');
const router = express.Router();

router.get('/alunos', alunoController.buscarTodosAlunos);

module.exports = router;