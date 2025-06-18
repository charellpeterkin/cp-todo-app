function addTask() {
  const input = document.getElementById('new-task');
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button onclick="toggleDone(this)">✅</button>
      <button onclick="removeTask(this)">🗑️</button>
    </div>
  `;

  document.getElementById('task-list').appendChild(li);
  input.value = '';
}

function toggleDone(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
}

function removeTask(button) {
  const li = button.closest('li');
  li.remove();
}
