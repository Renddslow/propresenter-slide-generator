const expandHex = (hex) => {
	let pairs = [];
	for (let i = 0; i < 3; i++) {
		pairs.push(`${hex[i]}${hex[i]}`);
	}

	return `#${pairs.join('')}`;
};

module.exports = (hex) => {
	const hexString = hex.replace('#', '').length === 3 ? expandHex(hex.replace('#', '')) : hex;

	const regexp = /#([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{0,2})([0-9A-Fa-f]{0,2})/gi;

	const matches = regexp.exec(hexString);
	const values = [matches[1], matches[2], matches[3]];

	const rgbVals = values.map((v) => parseInt(v, 16));
	const [red, green, blue] = rgbVals;

	return [`red${red}`, `green${green}`, `blue${blue}`];
};