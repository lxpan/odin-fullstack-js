const images = document.querySelectorAll('.slide');
const previousImageBtn = document.getElementById('left');
const nextImageBtn = document.getElementById('right');

const imagesArr = Array.from(images);
let currentIdx = 1;

function changeImage(e) {
    const currentlyDisplayedImage = document.querySelector('.displayed');

    currentlyDisplayedImage.classList.toggle('displayed');
    currentlyDisplayedImage.classList.toggle('hidden');

    console.log(e.target.id);

    if (e.target.id == 'left') {
        currentIdx = ((currentIdx - 1) + imagesArr.length) % imagesArr.length;
    } else {
        currentIdx = (currentIdx + 1) % imagesArr.length;    
    }

    imagesArr[currentIdx].classList.toggle('hidden');
    imagesArr[currentIdx].classList.toggle('displayed');
}

// function nextImage(e) {
//     const displayedImage = document.querySelector('.displayed');
//     displayedImage.classList.toggle('displayed');
//     displayedImage.classList.toggle('hidden');

//     currentIdx = (currentIdx + 1) % imagesArr.length;
//     imagesArr[currentIdx].classList.toggle('hidden');
//     imagesArr[currentIdx].classList.toggle('displayed');
// }

// function previousImage(e) {
//     const displayedImage = document.querySelector('.displayed');
//     displayedImage.classList.toggle('displayed');
//     displayedImage.classList.toggle('hidden');

//     currentIdx = ((currentIdx - 1) + imagesArr.length) % imagesArr.length;
//     imagesArr[currentIdx].classList.toggle('hidden');
//     imagesArr[currentIdx].classList.toggle('displayed');
// }

nextImageBtn.addEventListener('click', changeImage);
previousImageBtn.addEventListener('click', changeImage);
