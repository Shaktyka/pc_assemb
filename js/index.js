// Переменные:
const headerRequestBtn = document.querySelector('.header__request');
const heroRequestBtn = document.querySelector('.hero__request');
const sendRequestBtn = document.querySelector('.send-request__btn');

const modal = document.querySelector('.modal');
const sendForm = modal.querySelector('.send__form');

// Открывает модалку:
const openModal = () => {
    modal.classList.add('show');
    
};

// Закрывает модалку:
const closeModal = () => {
    modal.classList.remove('show');
};

// Обработчики:
const requestBtnClickHandler = (evt) => {
    evt.preventDefault();
    const isOpened = modal.classList.contains('show');

    if (isOpened) {
        closeModal();
    } else {
        openModal();
    }
};

// Отправка формы:
const sendFormSubmitHandler = () => {
    evt.preventDefault();
    // Валидация данных формы
    closeModal();
};

// Подключение обработчиков:
sendForm.addEventListener('submit', sendFormSubmitHandler);
headerRequestBtn.addEventListener('click', requestBtnClickHandler);
heroRequestBtn.addEventListener('click', requestBtnClickHandler);
sendRequestBtn.addEventListener('click', requestBtnClickHandler);
