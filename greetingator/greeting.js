set = document.getElementById('set');
clear = document.getElementById('clear');
greetingArea = document.querySelector('.welcome');
greetingReset = `
    <h1>Welcome, what's your name?</h1>
`

greetingArea.innerHTML = greetingReset;

function nameSet() {
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;

    if(secondName !== '') {
        var initial = firstName.charAt(0); 
        var greeting = `
            <h1>Welcome ${initial}. ${secondName}</h1>
        `
    } else {
        var greeting = `
            <h1>Welcome ${firstName}</h1>
        `
    }

    greetingArea.innerHTML = greeting;
};

function nameReset() {
    greetingArea.innerHTML = greetingReset;
};

set.addEventListener('click', nameSet);
clear.addEventListener('click', nameReset);