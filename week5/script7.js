    //1) Change the code from the previous exercise, so when the button
//is clicked on, it moves 10 px to the left
//2) Change the event listener from click to keydown on the 
//document - document.addEventListener('keydown', functionName)
//3) When a key is pressed, move the button 10px to the left
//4) Each time you press a key it should move further and further left, moving 10px each time

function myKeyDown() {
    var element = document.getElementById('circle'); 
    var positionLeft = element.offsetLeft;
      element.style.left = positionLeft - 10 + 'px';
    }

      function myLoadEvent() { 
        document.addEventListener('keydown', myKeyDown);

    }

    document.addEventListener('DOMContentLoaded', myLoadEvent);