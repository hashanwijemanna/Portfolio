// script.js
const slider = document.querySelector('.slider');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slider.children.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
    updateSlider();
}

function updateSlider() {
    const translateY = -currentSlide * 100;
    slider.style.transform = `translateY(${translateY}%)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

