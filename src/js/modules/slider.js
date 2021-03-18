const slider = (wrapperSelector, innerSelector, slidesSelector, prevSelector, nextSelector) => {
    const wrapper = document.querySelector(wrapperSelector),
          inner = document.querySelector(innerSelector),
          slides = document.querySelectorAll(slidesSelector),
          prev = document.querySelector(prevSelector),
          next = document.querySelector(nextSelector),
          width = window.getComputedStyle(wrapper).width;

    let offset = 0;

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        inner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        inner.style.transform = `translateX(-${offset}px)`;
    });
};

export default slider;