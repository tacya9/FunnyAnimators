export default class ShowMore {
	constructor(props) {
		this.visibleContent = props.visibleContent;
		this.hiddenContent = props.hiddenContent;
		this.isOpen = false;
		this.element = this.createShowMore();
	}

	createShowMore() {
		const showMore = document.createElement('div');
		const button = document.createElement('button');

		showMore.classList.add('c-show-more');
		showMore.innerHTML = `
		<p class="c-show-more__info">
			<span class="c-show-more__visible-info">${this.visibleContent}</span>
			<span class="c-show-more__hidden-info">${this.hiddenContent}</span>
		</p>
		`;

		button.classList.add('c-show-more__button');
		button.innerHTML = 'Show More';
		button.addEventListener('click', () => {
			this.isOpen = !this.isOpen;
			showMore.classList.toggle('m-open');
			button.innerHTML = `Show ${this.isOpen ? 'Less' : 'More'}`;
		})

		showMore.appendChild(button);

		return showMore;
	}

	// render(parent) {
	// 	return parent ? parent.appendChild(this.element) : this.element;
	// }
}