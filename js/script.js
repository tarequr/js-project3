const sliderContainer = document.querySelector('.slider-container');
const sliderRight     = document.querySelector('.right-slide');
const sliderLeft      = document.querySelector('.left-slide');
const upButton        = document.querySelector('.up-button');
const downButton      = document.querySelector('.down-button');

const slidersLength = sliderRight.querySelectorAll('div').length;

// console.log(slidersLength);
let activeSliderIndex = 0;

sliderLeft.style.top = `-${(slidersLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    // console.log(sliderHeight);
    if (direction === 'up') {
        activeSliderIndex++
        if (activeSliderIndex > slidersLength -1) {
            activeSliderIndex = 0
        }
    } else if (direction === 'down') {
        activeSliderIndex--
        if (activeSliderIndex < 0) {
            activeSliderIndex = slidersLength - 1
        } 
    }

    sliderRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`
}