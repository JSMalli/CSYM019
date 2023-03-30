    //1) Change the load event so that the button starts with an opacity of 1 (completely 
    //visible). Hint: you will need to set the initial value when the page loads or it 
    //won’t work.
//2) Change the click event so that when the button is clicked, it starts a timer using 
//setInterval with an interval of 1 second
//3) Each time the timer is called, reduce the opacity of the button by 0.1 (It should 
    //take 10 seconds for the button to disappear completely)
//Hint: The timer function will contain the exact same code as you used in the 
//click event in Exercise 5, you get the timer to call the function!
//4) Adjust the timer from every second (1000) to every hundredth of a second (10) 
//5) Adjust the timer function so that it only removes 0.01 from the opacity each time 
//This will add more 'steps' to the transition and the animation will look smoother

function myInterval() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity); 

    element.style.opacity = circleOpacity - 0.01;
    }

    function myClickEvent() {
        setInterval(myInterval, 10);
      }

    function myLoadEvent() {
    var element = document.getElementById('circle');
    element.style.opacity = 1;  // I think it should be here
    element.addEventListener('click', myClickEvent); }
    //element.style.opacity = 1; //incorrect position

    document.addEventListener('DOMContentLoaded', myLoadEvent);