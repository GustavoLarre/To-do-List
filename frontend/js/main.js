const API_URL = 'http://localhost:3000/auth';

// Cadastro
const formCadastro = document.getElementById('formCadastro');
if (formCadastro) {
  formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
      const res = await fetch(`${API_URL}/cadastro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();
      const msg = document.getElementById('mensagem');

      if (res.ok) {
        msg.textContent = data.mensagem;
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
      } else {
        msg.textContent = data.erro;
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  });
}

// Login
const formLogin = document.getElementById('formLogin');
if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();
      const msg = document.getElementById('mensagemLogin');

      if (res.ok) {
        msg.textContent = data.mensagem;
        setTimeout(() => {
          window.location.href = 'ola.html';
        }, 1500);
      } else {
        msg.textContent = data.erro;
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  });
}
