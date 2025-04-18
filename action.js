const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const burgerMenu = document.getElementById('menu-toggle');
const allLinks = document.querySelectorAll('a');

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
        toggleButton.classList.add('light-mode');
        toggleButton.classList.remove('dark-mode');
        toggleButton.textContent = 'Dark Mode';
        burgerMenu.classList.add('light-mode');
        mobileNav.classList.add('light-mode');
        allLinks.forEach(link => {
            link.classList.add('light-mode');
        });
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        nav.classList.remove('light-mode');
        footer.classList.remove('light-mode');
        toggleButton.classList.remove('light-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
        burgerMenu.classList.remove('light-mode');
        mobileNav.classList.remove('light-mode');
        allLinks.forEach(link => {
            link.classList.remove('light-mode');
        });
    }
});

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Close the mobile nav when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNav = mobileNav.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInsideNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }
});

// Close the mobile nav when a link is clicked
const navLinks = mobileNav.querySelectorAll('a'); // Select all links inside the mobile nav
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden'); // Hide the mobile nav
    });
});
// Initialize on page load
initializeTheme();