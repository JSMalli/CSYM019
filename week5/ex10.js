var interval = 0;
clearInterval(interval);

function moveDown(event) {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetTop;
    element.style.left = parseInt(positionLeft) + 1 + 'px';

}

function moveleft() {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) - 1 + 'px';

}

function moveUp() {
    var element=document.getElementById('circle')
    var positionTop = element.offsetTop;
    element.style.left = parseInt(positionLeft) - 1 + 'px';

}

function moveRight() {
    var element=document.getElementById('circle')
    var positionLeft = element.offsetLeft;
    element.style.left = parseInt(positionLeft) + 1 + 'px';

}

function myKeyDown(event) {
    //var element=document.getElementById('circle')

    if (event.keyCode==37){

        setInterval(moveLeft,10);
    }

    if (event.keyCode==38){

        setInterval(moveLeft,10);
    }

    if (event.keyCode==40){

       setInterval(moveDown,10);
    }

    if (event.keyCode==39){

        setInterval(moveRight,10);
    }
}


///variable scope



/*function myClickEvent(){
    myVariable=myVariable+1;
    console.log(myVariable);
}*/

function myLoadEvent() {
    document.addEventListener('keyDown',myKeyDown);
}

document.addEventListener('DOMContentLoaded',myLoadEvent);

