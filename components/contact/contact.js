import {getTextWithHyphens} from "../../utils/string.js";

export default class Contact {
	constructor(props) {
		this.label = getTextWithHyphens(props.label);
		this.value = props.value;
		this.element = this.createContact();
	}

	createContact() {
		const contact = document.createElement('div');

		contact.classList.add('c-contact');
		contact.innerHTML = `
			<span class="c-contact__label">${this.label}</span>
			<span class="c-contact__value">${this.value}</span>
		`;

		return contact;
	}

	render(parent) {
		return parent ? parent.appendChild(this.element) : this.element;
	}
}
