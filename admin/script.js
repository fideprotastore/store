const CORRECT_HASH = "be666c3d2d5510b053a81c4f3be4b831c7aee949a7334cf3d1f7c83f06ce7b29";

const loginScreen = document.getElementById('login-screen');
const adminPanel = document.getElementById('admin-panel');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const togglePassword = document.getElementById('toggle-password');
const panelContent = document.getElementById('panel-content');

togglePassword.addEventListener('click', () => {
  const passwordInput = document.getElementById('admin-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('admin-password').value;
  const hash = CryptoJS.SHA256(password).toString();

  if (hash === CORRECT_HASH) {
    sessionStorage.setItem('fideprota_admin_logged_in', 'true');
    loginScreen.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    loadAdminContent();
  } else {
    loginError.classList.remove('hidden');
    loginForm.classList.add('animate-error');
    setTimeout(() => loginForm.classList.remove('animate-error'), 300);
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  sessionStorage.removeItem('fideprota_admin_logged_in');
  adminPanel.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});

if (sessionStorage.getItem('fideprota_admin_logged_in') === 'true') {
  loginScreen.classList.add('hidden');
  adminPanel.classList.remove('hidden');
  loadAdminContent();
}

function loadAdminContent() {
  panelContent.innerHTML = `
    <section class="mb-6">
      <h3 class="text-xl font-bold text-primary mb-4">Métricas</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-primary-light p-4 rounded-lg text-center">
          <p class="font-semibold text-primary-dark">Últimos 7 dias</p>
          <p id="metric-7d" class="text-2xl font-bold">0</p>
        </div>
        <div class="bg-primary-light p-4 rounded-lg text-center">
          <p class="font-semibold text-primary-dark">Últimos 30 dias</p>
          <p id="metric-30d" class="text-2xl font-bold">0</p>
        </div>
        <div class="bg-primary-light p-4 rounded-lg text-center">
          <p class="font-semibold text-primary-dark">Total de Cliques</p>
          <p id="metric-total" class="text-2xl font-bold">0</p>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-xl font-bold text-primary mb-4">Gerenciar Produtos</h3>
      <p class="text-gray-500">Área para adicionar ou editar produtos (em construção).</p>
    </section>
  `;
}
