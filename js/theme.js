const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

if (document.documentElement.classList.contains('dark')) {
    lightIcon.classList.remove('hidden');
} else {
    darkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden', !isHidden);
        menuIconClose.classList.toggle('hidden', isHidden);
    });
}
