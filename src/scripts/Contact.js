// Given a single contact object, this component builds out the HTML
// and returns it
const Contact = {
    testIt () {
        console.log("hello from Contact.js");
    },

    // This method takes one argument, which we expect to be an
    // object that represents a contact and will have the following
    // structure:
    // {
    //   name: "name value",
    //   phone: "phone value",
    //   city: "city value"
    //   company: "company value"
    //   id: "auto-generated identifier"
    // }
      
    contactBuilder () {
        const contactForm = document.createElement("form");
      //contactForm.setAttribute("action", "index.html");
      //contactForm.setAttribute("method", "post");
  
  // Defined 5 primary elements of form
      const nameFieldset = document.createElement("fieldset");
      const phoneFieldset = document.createElement("fieldset");
      const cityFieldset = document.createElement("fieldset");
      const companyFieldset = document.createElement("fieldset");
      const addButton = document.createElement("button");
  
  
  //2 sub-elements in nameFieldset - Label and input field
      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Name: ";
      
      const nameField = document.createElement("input");
      nameField.setAttribute("type", "text");
      nameField.className = "name-field";
      nameField.textContent = contactObject.name;
  
      nameFieldset.appendChild(nameLabel);
      nameFieldset.appendChild(nameField);
      contactForm.appendChild(nameFieldset);
  
      
  //2 elements in phoneFieldset - Label and input field
      const phoneLabel = document.createElement("label");
      phoneLabel.textContent = "Phone: ";
      
      const phoneField = document.createElement("input");
      phoneField.setAttribute("type", "tel");
      phoneField.className = "phone-field";
      phoneField.textContent = contactObject.phone;
  
      phoneFieldset.appendChild(phoneLabel);
      phoneFieldset.appendChild(phoneField);
      contactForm.appendChild(phoneFieldset);
  
      
  //2 elements in cityFieldset - Label and input field
      const cityLabel = document.createElement("label");
      cityLabel.textContent = "City: ";
      
      const cityField = document.createElement("input");
      cityField.setAttribute("type", "text");
      cityField.className = "city-field";
      cityField.textContent = contactObject.city;
  
      cityFieldset.appendChild(cityLabel);
      cityFieldset.appendChild(cityField);
      contactForm.appendChild(cityFieldset);
        
  
  //2 elements in companyFieldset - Label and input field
      const companyLabel = document.createElement("label");
      companyLabel.textContent = "Company: ";
      
      const companyField = document.createElement("input");
      companyField.setAttribute("type", "text");
      companyField.className = "company-field";
  
      companyFieldset.appendChild(companyLabel);
      companyFieldset.appendChild(companyField);
      contactForm.appendChild(companyFieldset);
      companyField.textContent = contactObject.company;
        
  // Add button and event listener
      addButton.textContent = "Add New Contact";
      addButton.addEventListener("click", Contact.addNewContact());
      contactForm.appendChild(addButton);
  
      //return contactForm
      },

    addNewContact () {

    }
}
  
  export default Contact