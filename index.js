const toRTF = require('./toRTF');
const createPresentation = require('./createPresentation');
const createSlide = require('./createSlide');

console.log(toRTF({
	font: 'Didot',
	color: '#acc35b',
	text: 'This is a story about a boy\nA story about a little boy and his canoe',
	fontSize: 150,
}));

console.log(createPresentation([
	createSlide({ label: 'Main Slide', imageUrl: 'https://helloworld' }),
]));
