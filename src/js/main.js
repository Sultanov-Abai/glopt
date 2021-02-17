import delivery from './modules/delivery';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    delivery('.delivery__card', '.delivery__main', '.delivery__showed', '.delivery__hidden', '.delivery__card-btn');
    slider('.carousel', '.carousel__inner', '.carousel__item', '.prev', '.next');
});