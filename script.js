const form = document.querySelector('form');
const themeSelect = document.getElementById('theme');
const languageSelect = document.getElementById('language');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  savePreferences();
});

function savePreferences() {
  const selectedTheme = themeSelect.value;
  const selectedLanguage = languageSelect.value;

  localStorage.setItem('theme', selectedTheme);
  localStorage.setItem('language', selectedLanguage);

  alert('Preferencias guardadas.');

  // Añade un nuevo código para actualizar el estilo de la página
  updateStyles(selectedTheme);
}

function loadPreferences() {
  const theme = localStorage.getItem('theme');
  const language = localStorage.getItem('language');

  if (theme) {
    themeSelect.value = theme;

    // Añade un nuevo código para actualizar el estilo de la página
    updateStyles(theme);
  }

  if (language) {
    languageSelect.value = language;
  }
}

function updateStyles(theme) {
  // Agrega o elimina la clase 'dark' del elemento body según el tema seleccionado
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

loadPreferences();
