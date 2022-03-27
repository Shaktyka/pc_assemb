const headerRequestBtn = document.querySelector('.header__request');

const headerRequestBtnHandler = (evt) => {
    evt.preventDefault();
    console.log(1);
};

headerRequestBtn.addEventListener('click', headerRequestBtnHandler);
