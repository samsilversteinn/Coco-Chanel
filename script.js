document.getElementById('contentOne').style.display = 'none'; // Hides the first paragraph in the life section.
document.getElementById('contentTwo').style.display = 'none'; // Hides the second paragraph in the life section.

function hidePanels() {
    document.getElementById('contentOne').style.display = 'none';
    document.getElementById('contentTwo').style.display = 'none';
    document.getElementById('contentOneTab').className = 'accordionPanelTab';
    document.getElementById('contentTwoTab').className = 'accordionPanelTab';
}//It hides both the life paragraphs and removes any of the highlights/background from the buttons.

function showContentOne() {
    hidePanels();
    document.getElementById('contentOne').style.display = 'block';
    document.getElementById('contentTwo').className = 'accordionPanelTab highlight';
}// When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.

function showContentTwo() {
    hidePanels();
    document.getElementById('contentTwo').style.display = 'block';
    document.getElementById('contentOne').className = 'accordionPanelTab highlight';
}// When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.







