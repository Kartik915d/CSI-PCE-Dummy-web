const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// On load, check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

toggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    
});

function updateIcon(theme) {
    toggleIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}
