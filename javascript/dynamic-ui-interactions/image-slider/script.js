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
    const displayedImage = document.querySelector('.displayed');
    displayedImage.classList.toggle('displayed');
    displayedImage.classList.toggle('hidden');

    // ((x-1) + k) % k

    currentIdx = ((currentIdx - 1) + imagesArr.length) % imagesArr.length;
    imagesArr[currentIdx].classList.toggle('hidden');
    imagesArr[currentIdx].classList.toggle('displayed');
}

nextImageBtn.addEventListener('click', nextImage);
previousImageBtn.addEventListener('click', previousImage);
