function toggleNav() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('visible');
}

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = '¡Mensaje enviado exitosamente!';
    this.reset();
});
