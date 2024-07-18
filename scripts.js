document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav ul li a').forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});


// Function to toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Event listener for toggle button
document.querySelector('.toggle-btn').addEventListener('click', toggleMenu);
