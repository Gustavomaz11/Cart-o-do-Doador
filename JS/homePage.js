document.addEventListener('DOMContentLoaded', function() {
    const bloodLevels = document.querySelectorAll('.blood-level');
    
    bloodLevels.forEach(level => {
        const percentage = level.dataset.level;
        
        // Definir cor baseada no nível
        if (percentage < 30) {
            level.style.backgroundColor = '#ff4444';
        } else if (percentage < 70) {
            level.style.backgroundColor = '#ffbb33';
        } else {
            level.style.backgroundColor = '#00C851';
        }
        
        // Animar a barra
        setTimeout(() => {
            level.style.width = percentage + '%';
        }, 100);
    });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

const showSlide = (index) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length; // Círculo
    slides[currentSlide].classList.add('active');
};

const nextSlide = () => {
    showSlide(currentSlide + 1);
};

const startSlideShow = () => {
    slideInterval = setInterval(nextSlide, 3000); // Troca a cada 3 segundos
};

const stopSlideShow = () => {
    clearInterval(slideInterval);
};

document.getElementById('slideshow').addEventListener('mouseover', stopSlideShow);
document.getElementById('slideshow').addEventListener('mouseout', startSlideShow);

startSlideShow();
