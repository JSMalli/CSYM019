function myClickFunction() {
    var element = document.getElementById('pageheading'); element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('paragraph'); element.firstChild.nodeValue = 'New paragraph text';
    }
    function myLoadFunction() {
    var element = document.getElementById('pageheading'); element.addEventListener('click', myClickFunction);
    }
    document.addEventListener('DOMContentLoaded', myLoadFunction);
   