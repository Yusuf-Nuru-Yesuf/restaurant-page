export function contactUs () {
    const contactUsContainer = document.createElement("div");
    contactUs.className = "contact-us"
    const contactUsHeading = document.createElement("h1");
    contactUsHeading.textContent = "Contact Us";
    const contactUsList = document.createElement("ul");
    contactUsContainer.appendChild(contactUsHeading);
    contactUsContainer.appendChild(contactUsList);

    const contacts = [
        {name: "John Law", phoneNumber: "555-666-7777", occupation: "Chef", email: "john@yuya.food"},
        {name: "Gary Tom", phoneNumber: "555-666-7776", occupation: "Chef", email: "gary@yuya.food"},
        {name: "Lotus Nat", phoneNumber: "555-666-7775", occupation: "Chef", email: "lotus@yuya.food"}
    ]

    contacts.forEach(contact => {
        const contactPerson = document.createElement("li");
        contactPerson.textContent = contactPerson.name;
        const contactPersonOccupation = document.createElement("p");
        contactPersonOccupation.textContent = contact.occupation;
        const contactPersonPhone = document.createElement("p");
        contactPersonPhone.textContent = contact.phoneNumber;
        const contactPersonEmail = document.createElement("p");
        contactPersonEmail.textContent = contact.email;
        contactUsList.appendChild(contactPerson);
        contactPerson.appendChild(contactPersonOccupation);
        contactPerson.appendChild(contactPersonPhone);
        contactPerson.appendChild(contactPersonEmail);
    })

    return contactUsContainer;
}