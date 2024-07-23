// Function to toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Function to close the menu
function closeMenu() {
    const nav = document.querySelector('nav ul');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

// Event listener for toggle button
document.querySelector('.toggle-btn').addEventListener('click', toggleMenu); 

// Event listener for menu items to close the menu when an item is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', closeMenu);
});