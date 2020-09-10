button = document.querySelector('.btn');

function toggleSize() {
    button.classList.toggle('btn--lrg');
    if (button.classList.contains('btn--lrg')){
        button.textContent = 'make me smalllllller';
    } else {
        button.textContent = 'Make me biggggggger!';
    }
    
}

button.addEventListener('click', toggleSize);