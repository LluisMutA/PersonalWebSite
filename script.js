let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carouselItems = document.querySelector('.carousel-items');

const downloadLink = "https://drive.google.com/uc?export=download&id=1dItZ7NEk-qUUbq50-ldRXo2iGnd2epNZa1cRKec43FA";

items.forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = downloadLink;  
  });
});

function showNext() {
  currentIndex = (currentIndex + 1) % totalItems; 
  updateCarousel();

  if (currentIndex === 0) {
    setTimeout(() => {
      carouselItems.style.transition = 'none'; 
      updateCarousel();  
      setTimeout(() => {
        carouselItems.style.transition = 'transform 0.5s ease'; 
      }, 50); 
    }, 500); 
  }
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * (items[0].offsetWidth);  
  carouselItems.style.transform = `translateX(${offset}px)`;  
  
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.visibility = 'visible';
      item.style.opacity = '1';  
      item.style.transition = 'opacity 0.5s ease';  
    } else {
      item.style.transition = 'opacity 0.5s ease';  
      item.style.opacity = '0'; 
      setTimeout(() => {
        item.style.visibility = 'hidden';  
      }, 500); 
    }
  });
}

setInterval(showNext, 3000); 

document.querySelector('.prev').addEventListener('click', showPrevious);
document.querySelector('.next').addEventListener('click', showNext);

const sections = document.querySelectorAll('section');

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    // Solo prevenir la acción si el enlace es interno (comienza con '#')
    if (href && href.startsWith('#')) {
      event.preventDefault();  // Evita el comportamiento por defecto solo para enlaces internos

      const sectionId = href.substring(1);

      sections.forEach(section => {
        section.style.display = 'none';
      });
      
      if (sectionId === 'about') {
        document.getElementById('about').style.display = 'block';
      } else {
        document.getElementById(sectionId).style.display = 'block';
      }
    }
    // Si el enlace es externo (no comienza con '#'), no hacemos preventDefault()
  });
});

// Estado inicial de las secciones
document.getElementById('about').style.display = 'block';
document.getElementById('portfolio').style.display = 'none';
document.getElementById('contact').style.display = 'none';
