//1) Add the if statement so that the button moves left when the left arrow key is pressed
//2) Add an if statement and relevant code to allow the up arrow to move the button 
//up 10px, the down arrow to move the button down 10px and the right arrow to move the 
//button right 10px

//Hint: You can get the keyCodes for each key in the same way you did for the left arrow using the 
//code from exercise 8 and printing the number in the console
//Hint: One if statement can directly follow another
//15-20 minutes
//3) Instead of moving the button 10px, use an interval when the relevant key is pressed 
//and have the button slide off the screen in the direction of the arrow pressed
//Pressing up should start a timeout that moves the button upwards 1px at a time
//The animation should look smooth 
//Note: Use a timeout!
//Hint: Each arrow should trigger a different timer and each timer will need its own function, you’ll end 
//up with at least 5 functions! One for the keyPress event and one for each fo the four direction timers 


function myKeyDown(event) {
    if (event.keyCode == 37) {
      setInterval(moveLeft, 10);
    }
    if (event.keyCode == 38) {
      setInterval(moveUp, 10);
    }
    if (event.keyCode == 40) {
      setInterval(moveDown, 10);
    }
    if (event.keyCode == 39) {
      setInterval(moveRight, 10);
  } 
}

function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
  }
  document.addEventListener('DOMContentLoaded',
  myLoadEvent);

function moveUp() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
  }
  function moveDown() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
  }
  function moveLeft() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
  }
  function moveRight() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
  }