import Contact from "../components/contact/contact.js";

const contactsList = document.getElementById('contactsList');
const infoContacts = [
	{
		label: 'director',
		value: 'ivan ivanov, tel: 111-111-111'
	},
	{
		label: 'administrator',
		value: 'ivan ivanov, tel: 111-111-111'
	},
	{
		label: 'manager',
		value: 'ivan ivanov, tel: 111-111-111'
	},
	{
		label: 'accountant',
		value: 'ivan ivanov, tel: 111-111-111'
	}
]

// infoContacts.forEach(function (contact){
infoContacts.forEach(contact => {
	const contactInfo = new Contact({
		label: contact.label,
		value: contact.value
	})

	contactsList.appendChild(contactInfo.element);
})