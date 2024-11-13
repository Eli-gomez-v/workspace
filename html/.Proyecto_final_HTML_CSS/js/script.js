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

function validatePasswords() {
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const goToContentLink = document.getElementById('go-to-content');

  if (newPassword === confirmPassword) {
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.textContent = 'Contraseña guardada correctamente';
      successMessage.style.display = 'block';
    }
    goToContentLink.style.display = 'block'; // Muestra el enlace para ir a la página de contenido
  } else {
    const errorMessage = document.getElementById('password-error-message');
    if (errorMessage) {
      errorMessage.textContent = 'Las contraseñas no coinciden. Inténtalo de nuevo.';
      errorMessage.style.display = 'block';
    }
  }
}

document.getElementById('passwordForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  validatePasswords();
});
const newPassword = document.getElementById('new-password').value;
const confirmPassword = document.getElementById('confirm-password').value;
const goToContentLink = document.getElementById('go-to-content');

if (newPassword === confirmPassword) {
  const successMessage = document.getElementById('success-message');
  if (successMessage) {
    successMessage.textContent = 'Contraseña guardada correctamente';
    successMessage.style.display = 'block';
  }
  goToContentLink.style.display = 'block'; // Muestra el enlace para ir a la página de contenido
} else {
  const errorMessage = document.getElementById('password-error-message');
  if (errorMessage) {
    errorMessage.textContent = 'Las contraseñas no coinciden. Inténtalo de nuevo.';
    errorMessage.style.display = 'block';
  }
}
