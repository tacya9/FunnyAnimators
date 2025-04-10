import Card from "../components/card/card.js";
import ShowMore from "../components/showMore/showMore.js";
import Contact from "../components/contact/contact.js";

const cardWrapper = document.getElementById('infoCard');
const infoWrapper = document.getElementById('extraDetails');

const supermanCard = new Card({
	pictUrl: '/components/card/images/superman.jpg',
	title: 'superman'
})
const moreInfo = new ShowMore({
	visibleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodminim veniam, quis nostrud ' +
		'exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in' +
		' reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.',
	hiddenContent: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
		'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id'
})
const contactOnMainPage = new Contact({
	label: 'founder:',
	value: 'ivan ivanov',
})

// supermanCard.render(cardWrapper);
// moreInfo.render(infoWrapper);
// contactOnMainPage.render(infoWrapper);

cardWrapper.appendChild(supermanCard.element);
infoWrapper.appendChild(moreInfo.element);
infoWrapper.appendChild(contactOnMainPage.element)
