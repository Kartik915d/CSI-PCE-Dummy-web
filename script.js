const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// On load, check for saved theme


toggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    toggleIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}
