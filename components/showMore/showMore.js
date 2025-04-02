export default class ShowMore {
	constructor(props) {
		this.visibleContent = props.visibleContent;
		this.hiddenContent = props.hiddenContent;
		this.isOpen = false;
		this.element = this.createShowMore();
	}

	createShowMore() {
		const showMore = document.createElement('div');
		// const moreInfo = document.createElement('p');
		const button = document.createElement('button');
		// const visibleInfo = document.createElement('span');
		// const hiddenInfo = document.createElement('span');

		showMore.classList.add('c-show-more');
		showMore.innerHTML = `
		<p class="c-show-more__info">
			<span class="c-show-more__visible-info">${this.visibleContent}</span>
			<span class="c-show-more__hidden-info">${this.hiddenContent}</span>
		</p>
		`;

		// moreInfo.classList.add('c-show-more__info');
		button.classList.add('c-show-more__button');
		// visibleInfo.classList.add('c-show-more__visible-info');
		// hiddenInfo.classList.add('c-show-more__hidden-info');
		// visibleInfo.innerHTML = `${this.visibleContent}`;
		// hiddenInfo.innerHTML = `${this.hiddenContent}`;
		button.innerHTML = 'Show More';
		button.addEventListener('click', function () {
			this.isOpen = !this.isOpen;
			showMore.classList.toggle('m-open');
			button.innerHTML = `Show ${this.isOpen ? 'Less' : 'More'}`;
		})
		// showMore.appendChild(moreInfo);
		// moreInfo.appendChild(visibleInfo);
		// moreInfo.appendChild(hiddenInfo);
		showMore.appendChild(button);

		return showMore;
	}

	render(parent) {
		return parent ? parent.appendChild(this.element) : this.element;
	}
}