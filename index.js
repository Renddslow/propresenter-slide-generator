const toRTF = require('./src/utils/toRTF');
const createPresentation = require('./src/createPresentation');
const createSlide = require('./src/createSlide');
const createTextElement = require('./src/createTextElement');

module.exports = {
	createPresentation,
	createSlide,
	createTextElement: ({ position, content, font, color, fontSize }) => createTextElement({
		position,
		content: toRTF({ font, color, text: content, fontSize }),
	}),
};
