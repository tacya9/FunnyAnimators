import {getTextWithHyphens} from "../../utils/string.js";

export default class Card {
	constructor(props) {
		this.pictUrl = props.pictUrl;
		this.title = props.title;
		this.body = props.body;
		this.element = this.creatCard();
	}

	creatCard() {
		const card = document.createElement('div');
		card.classList.add('c-card');
		card.addEventListener('click', this.showAlert.bind(this));
		card.innerHTML = `
			<img class='c-card__pict' src="${this.pictUrl}" alt="superhero" />
			<div class="c-card__title">${getTextWithHyphens(this.title)}</div>
		`;
		if (this.body) {
			const cardBody = document.createElement('div');
			cardBody.classList.add('c-card__body');
			if (typeof this.body === 'string') {
				cardBody.innerHTML = this.body;
			} else {
				cardBody.appendChild(this.body);
			}
			card.appendChild(cardBody);
		}
		return card;
	}

	showAlert() {
		alert(`A card with the title: ${this.title}`)
	}

	render(parent) {
		return parent ? parent.appendChild(this.element) : this.element;
	}
}