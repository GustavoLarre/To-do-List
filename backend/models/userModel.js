const db = require('../config/db');

// Insere um novo usuário no banco
async function criarUsuario(nome, email, senhaHash) {
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  const [result] = await db.execute(sql, [nome, email, senhaHash]);
  return result;
}

// Busca usuário por e-mail
async function buscarUsuarioPorEmail(email) {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  const [rows] = await db.execute(sql, [email]);
  return rows[0];
}

module.exports = { criarUsuario, buscarUsuarioPorEmail };
