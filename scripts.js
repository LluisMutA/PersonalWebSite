document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = '¡Mensaje enviado exitosamente!';
    this.reset();
});
