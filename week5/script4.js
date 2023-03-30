    //1) Amend the page so that when the button is clicked, the
//opacity is set to 1
//When the page loads the opacity should be set to 0.5
    //When the button is clicked the button should be completely visible as its opacity is set to 1

function myClickEvent() {
    var element = document.getElementById('circle');
    element.style.opacity = 1;
    }
    function myLoadEvent() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;  // I think it should be here
    element.addEventListener('click', myClickEvent); }
    //element.style.opacity = 0.5; //incorrect position

    document.addEventListener('DOMContentLoaded', myLoadEvent);