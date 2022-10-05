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
    } else if (e.target.id == 'right') {
        currentIdx = (currentIdx + 1) % imagesArr.length;    
    }

    imagesArr[currentIdx].classList.toggle('hidden');
    imagesArr[currentIdx].classList.toggle('displayed');



}

function createProgressCircles() {
    const jumpToImage = (e) => {
        const navCircleImageIdx = e.target.id;
        currentIdx = navCircleImageIdx;
        changeImage(e);

        // changed highlighted circle
        const progressCircles = Array.from(document.querySelectorAll('.circle'));

        for(let i = 0; i < progressCircles.length; i++) {
            progressCircles[i].classList.remove('selected');
        }
        
        progressCircles[currentIdx].classList.add('selected');
            
        
    }

    // create as many circles as there are images
    const numCircles = imagesArr.length;
    const progressCirclesDiv = document.querySelector('.progress-circles');

    for (let i = 0; i < numCircles; i++) {
        const anchor = document.createElement('a');
        const navCircle = document.createElement('div');
        
        navCircle.classList.add('circle');
        navCircle.id = i;
        navCircle.addEventListener('click', jumpToImage);

        if(i == currentIdx) {
            navCircle.classList.add('selected');
        }
        
        anchor.href = '#';
        anchor.appendChild(navCircle);
        
        progressCirclesDiv.appendChild(anchor);
    }
}

createProgressCircles();

nextImageBtn.addEventListener('click', changeImage);
previousImageBtn.addEventListener('click', changeImage);
