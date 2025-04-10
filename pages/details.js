import Card from "../components/card/card.js";
import ShowMore from "../components/showMore/showMore.js";

const cardsFlex = document.getElementById('cardsFlex');
const cardContents = [
	{
		card: {
			pictUrl: '/components/card/images/superman.jpg',
			title: 'superman',
		},
		showMore: {
			visibleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodminim veniam, quis nostrud ' +
				'exercitation . reprehenderit in voluptate velit esse fugiat nulla pariatur.',
			hiddenContent: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
				'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id'
		}
	},
	{
		card: {
			pictUrl: '/components/card/images/spiderman.jpg',
			title: 'spiderman',
		},
		showMore: {
			visibleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodminim veniam, quis nostrud ' +
				'exercitation . reprehenderit in voluptate velit esse fugiat nulla pariatur.reprehenderit in voluptate' +
				' velit esse fugiat nulla pariatur.',
			hiddenContent: 'Duis aute irure dolor in reprehenderit in voluptate reprehenderit in voluptate velit esse ' +
				'fugiat nulla pariatur.velit esse cillum dolore eu fugiat nulla ' +
				'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id'
		}
	},
	{
		card: {
			pictUrl: '/components/card/images/captain-america.jpg',
			title: 'captainamerica',
		},
		showMore: {
			visibleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodminim veniam, quis nostrud ' +
				'exercitation',
			hiddenContent: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
				'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id'
		}
	}
]

cardContents.forEach(function (cardContent) {
	const showMoreComponent = new ShowMore({
		visibleContent: cardContent.showMore.visibleContent,
		hiddenContent: cardContent.showMore.hiddenContent,
	})
	const cardComponent = new Card({
		pictUrl: cardContent.card.pictUrl,
		title: cardContent.card.title,
		body: showMoreComponent.element
	})
	const flexCell = document.createElement('div')

	flexCell.classList.add('c-flex__item');
	flexCell.classList.add('m-flex-1');

	flexCell.appendChild(cardComponent.element);
	cardsFlex.appendChild(flexCell);
})