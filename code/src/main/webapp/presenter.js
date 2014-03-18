/*
loadContacts() should make AJAX call to load contacts.txt file into container div.
No formatting needed.
read http://stackoverflow.com/questions/14446447/javascript-read-local-text-file
 */

function loadContacts(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) { // 4: request finished and response is ready
            if(rawFile.status === 200) { // response for GET: 200 OK
                var allText = rawFile.responseText;
                parse(allText);
                var header = getHeader(); // array
                var contacts = getContacts(); // array of arrays

                var tableElem = "<table border=\"1\" style=\"width:300px\"> \n<tr>\n";
                // add header line to table
                for (i=0; i<header.length; i++) {
                    tableElem += "\t<th>" + header[i] + "</th>\n";
                }
                tableElem += "</tr>\n";

                // add each contact to table
                for (i=0; i<contacts.length; i++) {
                    tableElem += "<tr>\n";
                    for (j=0; j<contacts[i].length; j++) {
                        tableElem += "\t<td>" + contacts[i][j] + "</td>\n";
                    }
                    tableElem += "</tr>\n";
                }
                
                tableElem += "</table>";

                document.getElementById("container").innerHTML = tableElem;
            }
        }
    }
    rawFile.send(null);
}

loadContacts("/list"); // executes function