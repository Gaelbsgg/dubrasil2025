document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.pesquisar i');
    const searchInput = document.querySelector('.pesquisar input[type="text"]');
    const searchSection = document.querySelector('.pesquisar');

    function showSearch() {
        searchSection.classList.add('show');
    }

    function hideSearch() {
        searchSection.classList.remove('show');
    }

    searchIcon.addEventListener('mouseover', showSearch);
    searchInput.addEventListener('mouseover', showSearch);
    searchSection.addEventListener('mouseleave', hideSearch);
});

const autoButtons = document.querySelectorAll('.auto-btn');
let counter = 1;

const slideShow = () => {
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 3000); // Alterne as imagens a cada 3 segundos
};

slideShow();