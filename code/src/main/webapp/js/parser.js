/*
* Parses the raw text into array.
* Note that first row is headline
*/
function parse(contactList) {
	var lines = contactList.split("\n"), // read list line by line
		contacts = []; // Array of arrays

	for (var i in lines) {
			contacts[i] = lines[i].split("\t");
	}

	return contacts;
}