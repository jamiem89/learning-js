// Grab some items we're gonna need
const list = document.querySelector('.to-do');
const addButton = document.querySelector('.add-button');
const addInput = document.querySelector('.add-input')

// Remove row
function removeRow(removeButton) {
    let listItem = this.closest(`li`);
    listItem.remove();
}

// Add row
function addRow(e) {
    //stop the form from reloading the page
    e.preventDefault();

    //Only add item if one available
    if(addInput.value) {
        const toAdd = addInput.value;

        //Create our new list html content
        const listHTML = document.createElement("li");
        const listContent = document.createTextNode(`${toAdd} `);
        const listSpan = document.createElement("span");
        const listSpanContent = document.createTextNode(`remove`);
        listHTML.classList.add('todo-item');
        listHTML.appendChild(listContent);
        listSpan.appendChild(listSpanContent);
        listHTML.appendChild(listSpan);

        //Place the HTML content
        list.appendChild(listHTML);

        //rerun the delete button function
        addDelButtons();

        //reset the input
        addInput.value = ''; 
    }  
}

// Assign remove row to click of delete button
function addDelButtons() {
    const delButtons = document.querySelectorAll('.todo-item span');
    delButtons.forEach(function(delButton) {
        delButton.addEventListener('click', removeRow);
    })
    console.log('buttons added');
};

// Remove default from form submit
addButton.addEventListener('click', addRow);

// Fire delete button function
addDelButtons();

