const character = document.querySelector('.sprite');
const sprite = character.querySelector('img');
let x = 0;
let y = 0;
const speed = 25;

let direction = 'right';

function handleKeyDown(event) {
    //Only proceed if an arrow key is pressed
    if(!event.key.includes('Arrow')) return;
    
    switch(event.key) {
        case 'ArrowUp':
            y = y - speed;
            sprite.src = "./assets/sprite__up.png"
            direction = 'up';
            break;
        case 'ArrowDown':
            y = y + speed;
            sprite.src = "./assets/sprite__down.png"
            direction = 'down';
            break;
        case 'ArrowLeft':
            x = x - speed;
            sprite.src = "./assets/sprite__left.png"
            direction = 'left';
            break;
        case 'ArrowRight':
            x = x + speed;
            sprite.src = "./assets/sprite__right.png"
            direction = 'right';
            break;
        default:
            //Just in case
            console.log('wrong key');
            break;
    }
    character.setAttribute('style', `
        --x: ${x}px;
        --y: ${y}px;
    `)
    console.log(x, y, direction);
    
}

window.addEventListener('keydown', handleKeyDown);