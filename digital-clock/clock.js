//// SET THE TIME

function setTime() {
    //Get the current date, h,m and s
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    //Select the DOM elements to update
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    //Set the elements with the current details
    hours.textContent = currentHours;
    minutes.textContent = currentMinutes;
    seconds.textContent = currentSeconds;
};
// Run the time update every second
setInterval(setTime, 1000);

//// CHANGE THE PAGE THEME

const modeButton = document.querySelector('header button');

function changeTheme(){
    themeName = modeButton.querySelector('span');
    currentTheme = themeName.textContent;
    
    console.log(`test`)
    switch(currentTheme) {
        case 'light':
            document.body.classList.remove('theme-dark');
            document.body.classList.add('theme-light');
            themeName.textContent = `dark`;
        break;
        case 'dark':
            document.body.classList.remove('theme-light');
            document.body.classList.add('theme-dark');
            themeName.textContent = `light`;
        break;
        default:
            document.body.classList.remove('theme-dark');
            document.body.classList.add('theme-light');
            themeName.textContent = `dark`;
        break;
    }
};

modeButton.addEventListener('click', changeTheme);