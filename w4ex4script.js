function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);
   