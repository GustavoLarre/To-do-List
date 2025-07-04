const { criarUsuario, buscarUsuarioPorEmail } = require('../models/userModel');
const { gerarHash, compararSenha } = require('../utils/hashUtils');

// Cadastro de usuário
async function cadastro(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const usuarioExistente = await buscarUsuarioPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Usuário já existe com esse e-mail.' });
    }

    const senhaHash = await gerarHash(senha);
    await criarUsuario(nome, email, senhaHash);

    res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

// Login de usuário
async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await buscarUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(400).json({ erro: 'Usuário não encontrado.' });
    }

    const senhaValida = await compararSenha(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(400).json({ erro: 'Senha inválida.' });
    }

    res.json({ mensagem: 'Login realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno no servidor.' });
  }
}

module.exports = { cadastro, login };
