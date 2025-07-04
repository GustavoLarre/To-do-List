const db = require('../config/db');

async function criarTarefa(usuario_id, titulo, descricao) {
  const sql = 'INSERT INTO tarefas (usuario_id, titulo, descricao) VALUES (?, ?, ?)';
  const [result] = await db.execute(sql, [usuario_id, titulo, descricao]);
  return result;
}

async function listarTarefas(usuario_id) {
  const sql = 'SELECT * FROM tarefas WHERE usuario_id = ? ORDER BY criado_em DESC';
  const [rows] = await db.execute(sql, [usuario_id]);
  return rows;
}

async function atualizarStatus(id, status) {
  const sql = 'UPDATE tarefas SET status = ? WHERE id = ?';
  await db.execute(sql, [status, id]);
}

async function excluirTarefa(id) {
  const sql = 'DELETE FROM tarefas WHERE id = ?';
  await db.execute(sql, [id]);
}

module.exports = {
  criarTarefa,
  listarTarefas,
  atualizarStatus,
  excluirTarefa
};
