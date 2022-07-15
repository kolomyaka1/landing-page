const questionsList = document.querySelectorAll('.questions__item');

questionsList.forEach(question => {
    question.addEventListener('click', () => {
        question.querySelector('.dropdown-item').classList.toggle('visible');
        question.querySelector('.plus-icon').classList.toggle('visible');
    })
})

const actorsContainer = document.querySelectorAll('.performance__additional-roles');

actorsContainer.forEach(actorContainer => {
    actorContainer.querySelector('.dropdown-btn').addEventListener('click', () => {
        actorContainer.querySelector('.roles').classList.toggle('visible');
        actorContainer.querySelector('.arrow-icon').classList.toggle('rotate');
        
    })
})  

