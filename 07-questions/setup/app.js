//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach( (question) => {
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', () => {
        question.classList.toggle('show-text');
    })
})


// traversing the dom
// const questionButtons = document.querySelectorAll(".question-btn");

// questionButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
    
//     } )
// })
