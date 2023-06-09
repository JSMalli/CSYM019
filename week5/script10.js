/*Exercise 10
● 1) Test the code from slide 65 to see how the variable retains its value
● 2) Amend your code from exercise 9 to store the timer in a variable
● 3) When keyDown() is pressed clear the last timer
● 4) Now, when you press a key more than once it should not affect the 
speed (and pressing a different key will change the direction!)
● 5) Add another key press, when space is pressed stop the circle from 
moving by clearing the timer
– Hint: You should only have one timer variable*/


var interval = 0; 
function myKeyDown(event) {

 clearInterval(interval);

 if (event.keyCode == 37) {
 interval = setInterval(moveLeft, 10);
 }

 if (event.keyCode == 38) {
 interval =setInterval(moveUp, 10);
 }

 if (event.keyCode == 40) {
 interval =setInterval(moveDown, 10);
 }

 if (event.keyCode == 39) {
 interval =setInterval(moveRight, 10);
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
    element.style.top = positionLeft - 1 + 'px';
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
