function getHeader() {
	return this.header;
}

function getContacts() {
	return this.contacts;
}

function parse(contactList) {
	var lines = contactList.split("\n"); // read list line by line
	var headerLine = lines[0]; // first line is header line
	this.header = headerLine.split("\t"); // keep it in array
	
	var contacts = new Array(); // Array of arrays
	for (i=1; i<lines.length; i++) {
		contacts[i-1] = lines[i].split("\t");
	}

	this.contacts = contacts;
	return headerLine;
// console.log(txt.split("\t")[0]);

}