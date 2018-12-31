import ContactCollection from "./ContactCollection"

const ContactForm = {

    testIt () {
        console.log("hello from ContactForm.js");
    },

    addNewContact () {
        console.log("Button was clicked");
        let cname = document.querySelector(".name-field").value;
        console.log(cname);
                
        let cphone = document.querySelector(".phone-field").value;
        console.log(cphone);
        
        let ccity = document.querySelector(".city-field").value;
        console.log(ccity);
        
        let ccompany = document.querySelector(".company-field").value;
        console.log(ccompany);
            
        let contactToSave =
        {
            "name": cname,
            "phone": cphone,
            "city": ccity,
            "company": ccompany,
        }
        
        console.log(contactToSave)
        ContactCollection.postContacts(contactToSave)
    }
}
export default ContactForm