const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

// Gera um hash seguro da senha
async function gerarHash(senha) {
  return await bcrypt.hash(senha, SALT_ROUNDS);
}

// Compara a senha informada com o hash armazenado
async function compararSenha(senha, hash) {
  return await bcrypt.compare(senha, hash);
}

module.exports = { gerarHash, compararSenha };
