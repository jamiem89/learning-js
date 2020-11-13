const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        //Aria attributes have to changed with the 'setAttribute' method.
        //This also applies to custom attributes etc
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // show the associated tabpanel content
    const id = event.currentTarget.id;
    const tabToShow = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabToShow.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

