const hexToRGB = require('./hexToRGB');

const header = `\\rtf\\ansi\\ansicpg1252\\cocoartf1404\\cocoasubrtf470`;

const fontTable = (fontName) => `{\\fonttbl\\f0\\fnil\\fcharset0 ${fontName};}`;
const colorTable = (color) => `{\\colortbl;\\${hexToRGB(color).join('\\')};}`;

const content = (fontSize, text) => `\\f0\\fs${fontSize} \\cf1 \\expnd0\\expndtw0\\kerning0\n${text.split('\n').join('\\\n')}`;

module.exports = ({ font, color, text, fontSize, formatting = '' }) => {
	return ([
		`{${header}`,
		fontTable(font),
		colorTable(color),
		formatting,
		`\n${content(fontSize, text)} }`,
	]).join('\n');
};