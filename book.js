let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(n) {
    currentIndex = (currentIndex + n + items.length) % items.length;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    changeSlide(1);
}

setInterval(nextSlide, 6000); 

showSlide(currentIndex);
function scrollNext() {
    const container = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth;
    container.scrollBy({
        left: cardWidth + 40, 
        behavior: 'smooth'
    });
}

function scrollPrev() {
    const container = document.querySelector('.card-container');
    const cardWidth = document.querySelector('.card').offsetWidth;
    container.scrollBy({
        left: -(cardWidth + 40), 
        behavior: 'smooth'
    });
}

function scrollNext2() {
    const container2 = document.querySelector('.card-container2');
    const cardWidth2 = document.querySelector('.card2').offsetWidth;
    container2.scrollBy({
        left: cardWidth2 + 40, 
        behavior: 'smooth'
    });
}

function scrollPrev2() {
    const container2 = document.querySelector('.card-container2');
    const cardWidth2 = document.querySelector('.card2').offsetWidth;
    container2.scrollBy({
        left: -(cardWidth2 + 40), 
        behavior: 'smooth'
    });
}

function scrollNext3(){
    const container3 = document.querySelector('.card-container3');
    const cardWidth3 = document.querySelector('.card3').offsetWidth;
    container3.scrollBy({
        left: cardWidth3 + 40, 
        behavior: 'smooth'
    });
}

function scrollPrev3() {
    const container3 = document.querySelector('.card-container2');
    const cardWidth3 = document.querySelector('.card2').offsetWidth;
    container3.scrollBy({
        left: -(cardWidth3 + 40), 
        behavior: 'smooth'
    });
}











