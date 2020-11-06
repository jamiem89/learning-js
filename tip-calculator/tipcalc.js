console.log('bingo time');

const calcButton = document.querySelector('button');
console.log(calcButton);

calcButton.addEventListener('click', function(event){
    console.log('button pressed');
    event.preventDefault();

    const bill = parseInt(document.querySelector(`input[name="bill"]`).value);

    const tip = parseInt(document.querySelector(`input[name="tip-amount"]`).value);

    const people = parseInt(document.querySelector(`input[name="people"]`).value);

    const results = document.querySelector('.results');

    results.innerHTML = `
        <h2>Your results</h2>
        <p>People: ${people}<br>
        Your amount: £${Math.round(bill / people)}<br>
        Tip percent: ${tip}<br>
        Tip amount: £${bill / tip}<br></br>
        Your total: ${Math.round((bill / people) + (bill / tip))}.
    `

});