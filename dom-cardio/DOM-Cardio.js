// Make a div
const wrapper = document.createElement('div');

// add a class of wrapper to it
wrapper.classList.add('wrapper');

// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
const list = document.createElement('ul');


// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const liOne = document.createElement('li');
liOne.innerText = "one";
list.appendChild(liOne);

const liTwo = document.createElement('li');
list.appendChild(liTwo);
liTwo.innerText = "two";

const liThree = document.createElement('li');
list.appendChild(liThree);
liThree.innerText = "three";

wrapper.appendChild(list);

// create an image
const img = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = "https://picsum.photos/500";
img.width = 250;
img.classList.add('cute');
img.alt = "Cute Puppy";

wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const divPara = `
<div>
    <p>First paragraph</p>
    <p>Second paragraph</p>
</div>
`;

listElement = document.querySelector('ul');

listElement.insertAdjacentHTML('beforebegin', divPara);


// add a class to the second paragraph called warning
const paraWarning = document.querySelector('div > p:last-child');
paraWarning.classList.add('warning');

// remove the first paragraph
paraDeleted = document.querySelector('div > p:first-child');
paraDeleted.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height){
    const generatedHTML = `
        <div class="player-card">
            <h2>${name} – ${age}</h2>
            <p>They are ${height}cm and ${age} years old. In dog years this person would be ${age * 7}. That would be a tall dog.</p>
            <button>Delete</button>
        </div>
    `;
    return generatedHTML;
};

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
const cardOne = generatePlayerCard('Jamie', 31, 170);
const cardTwo = cardOne + generatePlayerCard('Elrond', 27, 120);

// append those cards to the div
cards.innerHTML = cardTwo;


// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('beforebegin',cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener





