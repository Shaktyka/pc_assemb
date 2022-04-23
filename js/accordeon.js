const programLineContents = document.querySelectorAll('.program-line__content');
let activeContent = programLineContents[0];
const activeClass = 'active';

// Инактивирует активный контент
const unsetActiveContent = (activeElement) => {
    const programDescription = activeElement.querySelector('.program-line__descr');
    programDescription.classList.remove(activeClass);
};

// Делает элемент активным
const setActiveContent = (element) => {
    activeContent = element;
    const programDescription = element.querySelector('.program-line__descr');
    programDescription.classList.add(activeClass);
};

// Переключает контент
const switchContent = (evt) => {
    const target = evt.target;
    const content = target.closest('.program-line__content');
    unsetActiveContent(activeContent);
    setActiveContent(content);
}

// Начало
const start = () => {
    setActiveContent(activeContent);

    programLineContents.forEach((element) => {
        element.addEventListener('click', switchContent);
    });
};

start();
