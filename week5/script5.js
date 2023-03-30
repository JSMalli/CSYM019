    //Each time you click on the circle it should get slightly less transparent 
    //until it becomes completely opaque
//2) Change the code so that clicking on the circle makes it become more 
//and more transparent. If you click enough times it should become invisible.

function myClickEvent() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity); 
    //element.style.opacity = circleOpacity + 0.1; //Part 1)
    element.style.opacity = circleOpacity - 0.1;
    }
    function myLoadEvent() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;  // I think it should be here
    element.addEventListener('click', myClickEvent); }
    //element.style.opacity = 0.5; //incorrect position

    document.addEventListener('DOMContentLoaded', myLoadEvent);