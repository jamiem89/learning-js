console.log('hello');

var count = 0;
counterText = document.querySelector('#counter');

document.querySelector('#clicker').onclick = function counterAdd() {
    count ++;
    counterText.textContent = `${count}`;
}
