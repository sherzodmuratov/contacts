/*
loadContacts() should make AJAX call to load contacts.txt file into container div.
No formatting needed.
read http://stackoverflow.com/questions/14446447/javascript-read-local-text-file
 */

 function loadContacts() {
 	var data = "Hi";// here data needs to be loaded
 	document.getElementById("container").innerHTML =  data;
 }

 loadContacts(); // executes function