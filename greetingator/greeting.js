button = document.getElementById('button');
clear = document.getElementById('clear');
greetingArea = document.querySelector('.welcome');
greetingReset = `
    <h1>Welcome, what's your name?</h1>
`

function nameSet() {
    console.log('button pressed');
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;

    if(secondName !== '') {
        console.log('NO LAST NAME');
        var initial = firstName.charAt(0); 
        var greeting = `
            <h1>Welcome ${initial}. ${secondName}</h1>
        `
    } else {
        console.log('LAST NAME');
        var greeting = `
        <h1>Welcome ${firstName}</h1>
    `
    }

    greetingArea.innerHTML = greeting;
};

function nameReset() {
    greetingArea.innerHTML = greetingReset;
};

button.addEventListener('click', nameSet);
clear.addEventListener('click', nameReset);