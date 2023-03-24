/*function myKeyDown(event) {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) + 10 + 'px';

}*/

function moveleft() {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) - 1 + 'px';

}

/*function moveUp() {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) - 10 + 'px';

}*/

function moveRight() {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) + 1 + 'px';

}

function myKeyDown(event) {
    //var element=document.getElementById('circle')

    if (event.keyCode==37){

        setInterval(moveUp,10);
    }

    if (event.keyCode==38){

        setInterval(moveUp,10);
    }

    if (event.keyCode==40){

        setInterval(moveDown,10);
    }

    if (event.keyCode==39){

        setInterval(moveRight,10);
    }
}

function myLoadEvent{

    document.addEventListener('keydown' myKeyDown);
}

document.addEventListener('DomContentLoaded',myLoadEvent);