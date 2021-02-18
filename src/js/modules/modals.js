const modals = () => {
    const overlay = document.querySelector('.overlay'),
          modal = document.querySelector('#call'),
          thanks = document.querySelector('#thanks'),
          btn = document.querySelector('.call_btn'),
          close = document.querySelector('.modal__close');

    btn.addEventListener('click', () => {
        overlay.classList.add('overlay_active');
        modal.classList.add('modal_active');
        document.body.style.overflow = 'hidden';
    });

    // overlay.addEventListener('click', e => {
    //     if (e.target == close || overlay) {
    //         overlay.style.display = 'none';
    //         modal.style.display = 'none';
    //         document.body.style.overflow = '';
    //     }
    // });
    close.addEventListener('click', () => {       
        modal.classList.remove('modal_active');
        overlay.classList.remove('overlay_active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', e => {       
        if (e.target == overlay) {
            modal.classList.remove('modal_active');
            overlay.classList.remove('overlay_active');
            document.body.style.overflow = '';
        } 
    });
};

export default modals;