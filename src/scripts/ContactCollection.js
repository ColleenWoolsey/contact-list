// COMPONENT RESPONSIBLE FOR INTERACTING WITH THE API.

const ContactCollection = {

    testIt () {
        console.log("hello from ContactCollection.js");
    },
  // This method returns a fetch, which means it is returning
  // a promise. Which means to access the response from the
  // asynchronous HTTP GET request that is being made by this
  // fetch, we can chain a .then at the point where this
  // method(getAllContacts) is called. The .then then is chained
  // to the fetch inside the method that's parsing the data from
  // JSON to data structures Javascript will understand.
  // In this case, because we have a collection of items,
  // it will be an array of objects.

  getAllContacts() {
    return fetch("http://localhost:8088/database.json")
    .then(response => response.json())
  },

//   postContact (contactToSave) {
//     fetch("http://localhost:8088/database.json",
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(contactToSave)
//     )}
  }
  export default ContactCollection