import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    slider('.carousel', '.carousel__inner', '.carousel__item', '.prev', '.next');
});