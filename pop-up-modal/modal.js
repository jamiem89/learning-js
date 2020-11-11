const cardButtons = document.querySelectorAll('.card-button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick() {
    const button = event.currentTarget;
    //closest looks for the closest element that matches .card
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    //populate the modal with content
    modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    `
    //show the modal
    modalOuter.classList.add('active');
};

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('active');
};

modalOuter.addEventListener('click', function(event) {
    //if a user clicks outside the modal, it returns null
    //nothing is found when clicking outside, because closest works up the tree, not down.
    //Adding a '!' to the front of something, turns it into a boolean
    //If something is found, returns true, else returns false
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
});

// If escape key pressed, also remove the active class
window.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        closeModal();
    }
});