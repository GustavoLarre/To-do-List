const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);
app.use('/tarefas', tarefaRoutes);

// Teste básico
app.get('/', (req, res) => {
  res.send('API está online!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
