function myClickEvent() {
    var element = document.getElementById('circle');
      element.style.backgroundColor = 'blue';
    }
    function myLoadEvent() {
    var element = document.getElementById('circle');
    //1) Amend exercise 2 so that in the load event, the circle's
    //opacity is set to 0.5
    element.style.opacity = 0.5;
    element.addEventListener('click', myClickEvent); }
    document.addEventListener('DOMContentLoaded', myLoadEvent);