const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const burgerMenu = document.getElementById('menu-toggle');
const projectCard = document.getElementById('projects')
const profilePicture = document.getElementById('PFP');
const eyes = document.querySelector('.eyes-container');
const cursor = document.querySelector('.cursor');
const clickmeimg = document.getElementById('click-me');
var timeout;

//eyeball animation
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
      const eyes = document.querySelectorAll('.eye');
      
      eyes.forEach(function(eye) {
        const eyeRect = eye.getBoundingClientRect();
        const pupil = eye.querySelector('.pupil');
        
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        
        const angle = Math.atan2(deltaY, deltaX);
        
        
        const radius = 6;
        const moveX = Math.cos(angle) * radius;
        const moveY = Math.sin(angle) * radius;
        
        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
    
    
    function randomBlink() {
      const eyes = document.querySelectorAll('.eye');

      eyes.forEach(eye => {
        eye.classList.add('blink');
        
        setTimeout(() => {
          eye.classList.remove('blink');
        }, 200);
      });
      
      const nextBlink = Math.random() * 5000 + 1000; // intervalo entre 1-6 segundos
      setTimeout(randomBlink, nextBlink);
    }
    
    setTimeout(randomBlink, 2000);
  });

  //enable eyeballs on PFP click
profilePicture.addEventListener('click', () => {
    if (eyes.classList.contains('visible')) {
        eyes.classList.remove('visible'); // Remove the active class if it exists
    }
    else {
        eyes.classList.add('visible'); // Toggle the active class on the eyes element
    }
});

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

});

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
    clickmeimg.src = 'media/clickMedark.png'; // Change the image source for light mode
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
    clickmeimg.src = 'media/clickMe.png'; // Change the image source for dark mode
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