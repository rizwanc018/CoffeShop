function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderObjs = document.querySelectorAll('.opacity-effect');

function checkSlide() {
    sliderObjs.forEach(sliderObj => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderObj.offsetHeight / 6;
        const isHalfShown = slideInAt > sliderObj.offsetTop;
        const objBottom = sliderObj.offsetTop + sliderObj.offsetHeight;
        const isNotScrolledPAst = window.scrollY < objBottom;
        if (isHalfShown && isNotScrolledPAst) {
            sliderObj.classList.add('active');
          } else {
            sliderObj.classList.remove('active');
          }
    })

    // console.log(sliderObj.offsetHeight);
    // const slideInAt = (window.scrollY + window.innerHeight) - sliderObj.offsetHeight / 2;
    // const isHalfShown = slideInAt > sliderObj.offsetTop;
    // const objBottom = sliderObj.offsetTop + sliderObj.offsetHeight;
    // const isNotScrolledPAst = window.scrollY < objBottom;

    // if (isHalfShown && isNotScrolledPAst) {
    //     sliderObj.classList.add('active');
    // } else {
    //     sliderObj.classList.remove('active');
    // }

}

window.addEventListener('scroll', debounce(checkSlide), 100);
