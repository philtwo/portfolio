
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

// Initialize the theme and button text
function initializeTheme() {
    body.classList.add('dark-mode');
    nav.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode'; // Default to dark mode
}

// Toggle theme and update button text
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        nav.classList.remove('dark-mode');
        nav.classList.add('light-mode');
        footer.classList.remove('dark-mode');
        footer.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode'; // Switch to light mode
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        nav.classList.remove('light-mode');
        nav.classList.add('dark-mode');
        footer.classList.remove('light-mode');
        footer.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode'; // Switch to dark mode
    }
});

// Call the initialization function
initializeTheme();