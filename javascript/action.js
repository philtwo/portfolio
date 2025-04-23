const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const burgerMenu = document.getElementById('menu-toggle');
const projectCard = document.getElementById('projects')
const cursor = document.querySelector('.cursor');
var timeout;

//cursor movement
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) {
        cursor.style.display = 'none'; // Hide the cursor on mobile devices
        return; // Exit the function if on mobile
    }
    else {
        let y = e.clientY
        let x = e.clientX
        
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
        cursor.style.display = 'block';
    }
    //stop animation when mouse is not moving
    // function mouseStopped() {
    //     cursor.style.display = 'none';
    // }

    // //hide animation
    // clearTimeout(timeout);
    // timeout = setTimeout(mouseStopped, 1000); // 1 second delay
});

//stop hover off screen
// document.addEventListener("mouseout", () => {
//     cursor.style.display = 'none';
// });

// Initialize the theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme'); // get saved theme from local storage
    if (savedTheme === 'light-mode') {
        applyLightMode();
    }
    else {
        applyDarkMode(); // default to dark mode
    }
}

function applyLightMode() {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    nav.classList.add('light-mode');
    footer.classList.add('light-mode');
    toggleButton.classList.add('light-mode');
    toggleButton.textContent = 'Dark Mode';
    burgerMenu.classList.add('light-mode');
    mobileNav.classList.add('light-mode');
    cursor.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode'); // save theme to local storage
    if(projectCard) {// Check if projectCard exists
        projectCard.classList.add('light-mode');
    }
}

function applyDarkMode() {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    nav.classList.remove('light-mode');
    footer.classList.remove('light-mode');
    toggleButton.classList.remove('light-mode');
    toggleButton.textContent = 'Light Mode';
    burgerMenu.classList.remove('light-mode');
    mobileNav.classList.remove('light-mode');
    cursor.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode'); // save theme to local storage
    if(projectCard) {// Check if projectCard exists
        projectCard.classList.remove('light-mode');
    }
}

// Toggle theme
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        applyLightMode();
    } 
    else {
        applyDarkMode();
    }
});

// Toggle Nav
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