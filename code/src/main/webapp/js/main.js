/**
 * Created by muratovs on 3/28/14.
 */

var contacts = document.getElementsByClassName("contact-brief");

var loadContactDetail = function() {
    var detailContainer = document.getElementById("contact-detail"),
        contactId = this.getAttribute("data-contact-id");
    detailContainer.innerHTML="Contact with id-" + contactId +" has been loaded from server via AJAX";
};

// Attach click event
for(var i=0; i < contacts.length; i++) {
    contacts[i].addEventListener('click', loadContactDetail, false);
}