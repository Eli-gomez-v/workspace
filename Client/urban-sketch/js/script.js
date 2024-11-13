// Basic validation for login form
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = 'Por favor, complete todos los campos.';
      errorMessage.style.display = 'block';
    }
    event.preventDefault();
  }
});

// Basic validation for email format
document.getElementById('email')?.addEventListener('input', (event) => {
  const email = event.target.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    const emailErrorMessage = document.getElementById('email-error-message');
    if (emailErrorMessage) {
      emailErrorMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
      emailErrorMessage.style.display = 'block';
    }
  }
});
