const model = require('../models/tarefaModel');

async function criar(req, res) {
  const { usuario_id, titulo, descricao } = req.body;
  try {
    const tarefa = await model.criarTarefa(usuario_id, titulo, descricao);
    res.status(201).json({ mensagem: 'Tarefa criada com sucesso', tarefa });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar tarefa' });
  }
}

async function listar(req, res) {
  const { usuario_id } = req.query;
  try {
    const tarefas = await model.listarTarefas(usuario_id);
    res.json(tarefas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar tarefas' });
  }
}

async function concluir(req, res) {
  const { id } = req.params;
  try {
    await model.atualizarStatus(id, 'concluida');
    res.json({ mensagem: 'Tarefa marcada como concluída' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao concluir tarefa' });
  }
}

async function excluir(req, res) {
  const { id } = req.params;
  try {
    await model.excluirTarefa(id);
    res.json({ mensagem: 'Tarefa excluída' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir tarefa' });
  }
}

module.exports = { criar, listar, concluir, excluir };
