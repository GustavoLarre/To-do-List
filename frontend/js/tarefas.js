const API = 'http://localhost:3000/tarefas';
const usuario_id = 1; // ⚠️ Substitua pelo ID do usuário logado, depois podemos usar sessionStorage

document.getElementById('formTarefa').addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;

  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario_id, titulo, descricao }),
  });

  if (res.ok) {
    carregarTarefas();
    document.getElementById('formTarefa').reset();
  }
});

async function carregarTarefas() {
  const res = await fetch(`${API}?usuario_id=${usuario_id}`);
  const tarefas = await res.json();
  const lista = document.getElementById('listaTarefas');
  lista.innerHTML = '';

  tarefas.forEach((tarefa) => {
    const li = document.createElement('li');
    li.textContent = `${tarefa.titulo} - ${tarefa.status}`;
    if (tarefa.status === 'pendente') {
      const btnConcluir = document.createElement('button');
      btnConcluir.textContent = 'Concluir';
      btnConcluir.onclick = () => concluirTarefa(tarefa.id);
      li.appendChild(btnConcluir);
    }
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.onclick = () => excluirTarefa(tarefa.id);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

async function concluirTarefa(id) {
  await fetch(`${API}/${id}/concluir`, { method: 'PUT' });
  carregarTarefas();
}

async function excluirTarefa(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  carregarTarefas();
}

carregarTarefas();
