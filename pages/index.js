import Card from "../components/card/card.js";

const cardWrapper = document.getElementById('infoCard');

const supermanCard = new Card({
	pictUrl: '/components/card/images/superman.jpg',
	title: 'superman'
})

supermanCard.render(cardWrapper);