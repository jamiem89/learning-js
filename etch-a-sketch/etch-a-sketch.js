//  SELECT THE ELEMENTS ON THE PAGE

//Get the canvas element
const canvas = document.querySelector('#etch-a-sketch');

//When working with a canvas, we have to get the context,
//The context is where we do our drawing. This can be 2d or 3d.
const ctx = canvas.getContext('2d');

//Get the shake button
const shakebutton = document.querySelector('.shake');

//how much should we move the line by each time
const MOVE_AMOUNT = 40;

// SET UP DEFAULTS FOR OUR CANVAS

//make variables from the canvas width and height
const width = canvas.width;
const height = canvas.height;

//create random x and y for start point
//random returns a number between 0 and 1, so we need to multiply
//that by the width to give us our start position
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

//setup some defaults for the line we use to draw
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

//set the background to black
ctx.fillStyle = "#333333";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//create a variable for changing the stroke colour
let hue = 0;
//hue can be a value between 0-359.
//it does wrap though, so a value of 360, is the same as 0.
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

//start the drawing - think of it as putting a pencil on the paper
ctx.beginPath();

//define where the path begins
ctx.moveTo(x, y);
//define where the path goes
ctx.lineTo(x, y);
//declare the stroke
ctx.stroke();

// WRITE A DRAW FUNCTION

//the curly braces create variables based on the parameters defined.
// This way is jsut the same as doing object.key
function draw({ key }) {
    //change the hue
    hue += 3;
    //change the stroke to the hue
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // start the path
    ctx.beginPath();
    // move the path to the predefine start point;
    ctx.moveTo(x, y);
    // using a switch statement is essentially an easier to read if statement
    // if the conditions are met, it runs the code, then skips to the end of the switch statement.
    // 'break' signifies a statemnet is finished
    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        // we include a default just incase, a key press doesn't match the switches
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
    
};

//  WRITE A HANDLER FOR THE KEYS

function handleKey(e) {
    //check if an arrow key has been pressed
    if(e.key.includes('Arrow')) {
        //stop the arrow keys scrolling the page
        e.preventDefault();
        //pass which key is pressed to the draw function
        draw({ key: e.key });
    }
}

//  Clear / shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0, width, height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    },
    { once: true} //this stopes the eventListener being added each time the function runs
    );
}

shakebutton.addEventListener('click', clearCanvas);

//  LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handleKey);
