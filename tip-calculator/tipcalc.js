
const calcButton = document.querySelector('button');
const results = document.querySelector('.results');

const resultsClose = document.querySelector('.results__close');


calcButton.addEventListener('click', function(event){
    console.log('button pressed');
    event.preventDefault();

    const bill = parseInt(document.querySelector(`input[name="bill"]`).value);

    const tip = parseInt(document.querySelector(`input[name="tip-amount"]`).value);

    const people = parseInt(document.querySelector(`input[name="people"]`).value);

    results.querySelector('p').innerText = `People: ${people}
    Your amount: £${Math.round(bill / people)}
    Tip percent: ${tip}
    Tip amount: £${bill / tip}
    Your total: £${Math.round((bill / people) + (bill / tip))}.
    `
    results.classList.add('results--active');
});

resultsClose.addEventListener('click', function(){
    results.classList.remove('results--active');
});