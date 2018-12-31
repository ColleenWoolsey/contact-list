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
    return fetch("http://localhost:8088/database.json.contacts")
    .then(response => response.json())
  },

  postContact (contactToSave) {
    fetch("http://localhost:8088/database.json.contacts",
    // method: "POST",
    // headers: {
    //     "Content-Type": "application/json"
    // },
    // body: JSON.stringify(contactToSave)
    )}
  }

  export default ContactCollection

//   const contactCollection = Object.create({}, {
//     "postContact": {
//       value: function(name, phone, address) {
//         return $.ajax({
//           url: "http://localhost:3000/contacts",
//           method: "POST",
//           data: {
//             name: name,
//             phone: phone,
//             address: address
//           }
//         })
//       }
//     },
//     "getContacts": {
//       value: function() {
//         return $.ajax("http://localhost:3000/contacts")
//       }
//     },
//     "deleteContact": {
//       value: function(id){
//         return $.ajax({
//           url: `http://localhost:3000/contacts/${id}`,
//           method: "DELETE"
//         })
//       }
//     },
//     "getContact": {
//       value: function(id) {
//         return $.ajax(`http://localhost:3000/contacts/${id}`)
//       }
//     },
//     "putContact": {
//       value: function(id, name, phone, address){
//         return $.ajax({
//           url: `http://localhost:3000/contacts/${id}`,
//           method: "PUT",
//           data: {
//             name: name,
//             phone: phone,
//             address: address
//           }
//         })
//       }
//     }
//   })