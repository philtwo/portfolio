const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

// Initialize the theme
function initializeTheme() {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
}

// Toggle theme
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        nav.classList.add('light-mode');
        footer.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        nav.classList.remove('light-mode');
        footer.classList.remove('light-mode');
        toggleButton.textContent = 'Light Mode';
    }
});

// Initialize on page load
initializeTheme();