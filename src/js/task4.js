import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");
const contacts = [];
console.log(contacts)


const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
if (contactsFromStorage !== null) {
  if (contactsFromStorage.length !== 0) {
    contactsFromStorage.forEach((contact) => {
        const item = document.createElement("li");
        list.prepend(item);
    
        const nameText = document.createElement("p");
        const surnameText = document.createElement("p");
        const phoneText = document.createElement("p");
        const emailText = document.createElement("p");
        
        nameText.textContent = contact.name;
        surnameText.textContent = contact.surname;
        phoneText.textContent = contact.phone;
        emailText.textContent = contact.email;


        nameText.setAttribute("contenteditable", "");
        surnameText.setAttribute("contenteditable", "");
        phoneText.setAttribute("contenteditable", "");
        emailText.setAttribute("contenteditable", "");
    
        nameText.setAttribute("id", uuidv4());
    
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
    
        item.prepend(removeBtn);
        item.prepend(nameText);
        item.prepend(surnameText);
        item.prepend(phoneText);
        item.prepend(emailText);

      removeBtn.addEventListener("click", () => {
        item.remove();
        contacts.forEach((contact) => {
          console.log(contact)
          const contactName = contact.name;
          if (contactName === nameText.textContent) {
            _.remove(contacts, (currentContact) => currentContact === contact);
            localStorage.setItem("contacts", JSON.stringify(contacts));
          }
        });
      });

      nameText.addEventListener('blur', () =>{
        contacts.forEach((contact, index) => {
          console.log(contacts)
          const contactId = contact.id;
          if (contactId === nameText.id) {
            contacts[index].name = name.textContent
            localStorage.setItem("contacts", JSON.stringify(contacts));
          }
        });
      })

      const contactObj = {
        name: contact.name,
        surname: contact.surname,
        phone: contact.phone,
        email: contact.email,
        id: contact.id,
      };
      contacts.push(contactObj);
      localStorage.setItem("contacts", JSON.stringify(contacts));
    });
  }
}

button.addEventListener("click", () => {
  if (name.value && surname.value && phone.value && email.value) {
    const item = document.createElement("li");
    list.prepend(item);

    const nameText = document.createElement("p");
    const surnameText = document.createElement("p");
    const phoneText = document.createElement("p");
    const emailText = document.createElement("p");

    nameText.textContent = name.value;
    surnameText.textContent = surname.value;
    phoneText.textContent = phone.value;
    emailText.textContent = email.value;

    nameText.setAttribute("contenteditable", "");
    surnameText.setAttribute("contenteditable", "");
    phoneText.setAttribute("contenteditable", "");
    emailText.setAttribute("contenteditable", "");

    nameText.setAttribute("id", uuidv4());

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    item.prepend(removeBtn);
    item.prepend(nameText);
    item.prepend(surnameText);
    item.prepend(phoneText);
    item.prepend(emailText);

    removeBtn.addEventListener("click", () => {
      item.remove();
      contacts.forEach((contact) => {
        const contactText = contact.name;
        if (contactText === name.textContent) {
          _.remove(contacts, (currentContact) => currentContact === contact);
          localStorage.setItem("contacts", JSON.stringify(contacts));
        }
      });
    });
    nameText.addEventListener("blur", () => {
      contacts.forEach((contact, index) => {
        const contactId = contact.id;

        if (contactId === nameText.id) {
          contacts[index].name = nameText.textContent;
          console.log(contact)
          localStorage.setItem("contacts", JSON.stringify(contacts));
        }
      });
    });

    const contactObj = {
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      email: email.value,
      id: nameText.id,
    };

    contacts.push(contactObj);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
});
