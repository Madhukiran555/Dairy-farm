// js/theme.js
function applySavedTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(theme + '-theme');
}
document.addEventListener('DOMContentLoaded', applySavedTheme);
