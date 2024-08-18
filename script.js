// Exemplo de código JavaScript para interatividade
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada');
    // Adicione interatividade conforme necessário
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.pesquisar i');
    const searchInput = document.querySelector('.pesquisar input[type="text"]');
    const searchSection = document.querySelector('.pesquisar');

    searchIcon.addEventListener('mouseover', function () {
        searchSection.classList.add('show');
    });

    searchIcon.addEventListener('mouseout', function () {
        searchSection.classList.remove('show');
    });

    // Se você deseja manter o campo visível enquanto o cursor está sobre o input
    searchInput.addEventListener('mouseover', function () {
        searchSection.classList.add('show');
    });

    searchInput.addEventListener('mouseout', function () {
        searchSection.classList.remove('show');
    });
});

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const thumbnails = document.querySelectorAll('.carousel-thumbnails button');
    
    if (index >= images.length || index < 0) return;
    
    // Update current index
    currentIndex = index;
    
    // Update image display
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Update thumbnail buttons
    thumbnails.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

// Initialize
showImage(0);