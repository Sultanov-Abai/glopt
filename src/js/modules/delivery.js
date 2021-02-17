const delivery = (cardsSelector, mainSelector, showedSelector, hiddenSelector, btnsSelector) => {
    const cards = document.querySelectorAll(cardsSelector),
          main = document.querySelectorAll(mainSelector),
          showed = document.querySelectorAll(showedSelector),
          hidden = document.querySelectorAll(hiddenSelector),
          btns = document.querySelectorAll(btnsSelector);

    cards.forEach((card, i) => {
        card.addEventListener('click', e => {
            if (e.target.classList.contains('delivery__card-btn')) {
                showed[i].classList.add('delivery__showed_active');
                hidden[i].classList.add('delivery__hidden_active');
                btns[i].style.cssText = `
                    position: relative;
                    top: 226px;
                `;
            }
            if (e.target.classList.contains('delivery__back')) {
                showed[i].classList.remove('delivery__showed_active');
                hidden[i].classList.remove('delivery__hidden_active');
                btns[i].style.cssText = `
                    position: static;
                    top: 0;
                `;
            }
        });
    });
};

export default delivery;