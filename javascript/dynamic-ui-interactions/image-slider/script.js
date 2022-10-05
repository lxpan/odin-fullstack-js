const images = document.querySelectorAll('.slide');
const previousImageBtn = document.getElementById('left');
const nextImageBtn = document.getElementById('right');

const imagesArr = Array.from(images);
let currentIdx = 1;

function nextImage(e) {
    const displayedImage = document.querySelector('.displayed');
    displayedImage.classList.toggle('displayed');
    displayedImage.classList.toggle('hidden');

    currentIdx = (currentIdx + 1) % imagesArr.length;
    imagesArr[currentIdx].classList.toggle('hidden');
    imagesArr[currentIdx].classList.toggle('displayed');
}

function previousImage(e) {
    console.log("foo");
}

nextImageBtn.addEventListener('click', nextImage);
