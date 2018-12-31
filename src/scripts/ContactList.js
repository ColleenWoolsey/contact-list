// This component will get the data, build the HTML from the data
// and append it to the DOM.

// To get the data, we will use the ContactCollection component.
// To build the HTML for each object in the array of contacts
// (which is what the data coming from the API becomes once we
// parse it), we will use the Contact component.

import ContactCollection from "./ContactCollection"
import Contact from "./Contact"

const ContactList = {
    getData() {
    // 1. Get data
    // The getAllContacts method will do a fetch and return
    // a promise. This call will return the data from the API
    // in the response.
    ContactCollection.getAllContacts()
    .then(allContacts => {
        // An empty document fragment
        let contactDocFragment = document.createDocumentFragment();
    //   2. Iterate over data and build HTML for each item
    //   We loop over the array of objects returned from our API
    //   and for each obect, we make a call to the contactBuilder
    //   method in the Contact module. This method takes a contact
    //   object (contactObject)as an argument and returns an HTML component
    //   Once we have that HTML, we append it to our document
    //   fragment so that it is slowly built up. By the end of
    //   the forEach loop, our document fragment contains all
    //   the HTML for all our data.
    allContacts.forEach(contactItem => {
        let contactHtml = Contact.contactBuilder(contactItem)
        contactDocFragment.appendChild(contactHtml)
    })
    // 3. Append the HTML to the DOM
    // We get a reference to a HTML element with the class
    // "output" and append our document fragment to that element.
    // Because the HTML element with class "output" is already on
    // the DOM, the HTML in the document fragment is appended to
    // the DOM.
    let outputDOM = document.querySelector("#form-container")
    outputDOM.appendChild(contactDocFragment)
    console.log(contactDocFragment)
        })
    }
}
export default ContactList