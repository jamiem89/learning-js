//grab the scrollable element to watch
const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
    //if the first item in payload arrow is equal to 1
    if (payload[0].intersectionRatio === 1) {
        //set the disable attribute on the button to false
        button.disabled = false;
        //and stop observing the scrollable element,
        ob.unobserve(terms.lastElementChild);
    }
    // We could add an 'else' statement here to re-add the class when not scrolled to the end
};

//create a new 'watcher'. This is similar to an event handler
//but it watches for whether an item is in view or not
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

//assign the watcher to the last element within the terms parent element
ob.observe(terms.lastElementChild);