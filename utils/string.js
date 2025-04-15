// export function getTextWithHyphens (text){
// 	let newText = '';
//
// 	for (let i = 0; i < text.length; i++){
// 		newText += `${text[i]}-`;
// 	}
// 	return newText.slice(0, newText.length - 1);
// }

// export function getTextWithHyphens (text){
// 	let newText = '';
//
// 	for (let i = 0; i < text.length; i++){
// 		newText += `-${text[i]}`;
// 	}
// 	return newText.slice(1, newText.length);
// }
// export function getTextWithHyphens (text) {
export const getTextWithHyphens = (text) => {
	const textArr = text.split('');

	return textArr.join('-');
}