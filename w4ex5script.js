function myClickFunction() {
    var element1 = document.getElementById('pageheading');
    element1.firstChild.nodeValue = 'New Heading';

    var element2 = document.getElementById('paragraph'); 
    element2.firstChild.nodeValue = 'New paragraph text';
   }


   document.addEventListener('click', myClickFunction);
 
   