const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.post('/', controller.criar);
router.get('/', controller.listar);
router.put('/:id/concluir', controller.concluir);
router.delete('/:id', controller.excluir);

module.exports = router;
