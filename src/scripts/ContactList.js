// This component will get the data, build the HTML from the data
// and append it to the DOM.

import ContactCollection from "./ContactCollection"
import Contact from "./Contact";
//import Contact from "./Contact"

const ContactList = {

    testIt () {
        console.log("hello from ContactList.js");
    },

    getData() {
    
    ContactCollection.getAllContacts()
    .then(allContacts => {
        let outputDOM = document.querySelector("#display-container");

        allContacts.forEach(contactItem => {
            let contactList = document.createElement("p");
            let name = contactItem.name;
            let phone = contactItem.phone;
            let city = contactItem.city;
            let company = contactItem.company;
            contactList.innerHTML = `<p>${name} ${phone} 
            ${city} ${company}</p>`
            outputDOM.appendChild(contactList);
            console.log(contactList);
           // Contact.contactBuilder(ContactList)
        })
    }
  )}
}

export default ContactList