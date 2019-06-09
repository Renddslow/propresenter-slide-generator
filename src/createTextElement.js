const uuid = require('uuid/v1');

const getPosition = ({ x = 0, y = 0, z = 0, w = 0, h = 0 }) => `${x} ${y} ${z} ${w} ${h}`;

module.exports = ({ position, content }) => ({
	'@': {
		UUID: uuid(),
		additionalLineFillHeight: '0.000000',
		adjustsHeightToFit: 'true',
		bezelRadius: '0.000000',
		displayDelay: '0.000000',
		displayName: 'Default',
		drawLineBackground: 'false',
		drawingFill: 'false',
		drawingShadow: 'false',
		drawingStroke: 'false',
		fillColor: '0 0 0 0',
		fromTemplate: 'false',
		lineBackgroundType: '1',
		lineFillVerticalOffset: '0.000000',
		locked: 'false',
		opacity: '1.000000',
		persistent: 'false',
		revealType: '0',
		rotation: '0.000000',
		source: '',
		textSourceRemoveLineReturnsOption: 'false',
		typeID: '0',
		useAllCaps: 'false',
		verticalAlignment: '0',
	},
	RVRect3D: {
		'@': { rvXMLIvarName: 'position' },
		'#': `{ ${getPosition(position)} }`,
	},
	shadow: {
		'@': { rvXMLIvarName: 'shadow' },
		'#': '4.000000|0 0 0 1|{2.8284300121567867, -2.8284297737379802}',
	},
	dictionary: {
		'@': { rvXMLIvarName: 'stroke' },
		NSColor: {
			'@': { rvXMLDictionaryKey: 'RVShapeElementStrokeColorKey' },
			'#': '0 0 0 0',
		},
		NSNumber: {
			'@': {
				hint: 'integer',
				rvXMLDictionaryKey: 'RVShapeElementStrokeWidthKey',
			},
			'#': '0',
		},
	},
	NSString: {
		'@': { rvXMLIvarName: 'RTFData' },
		'#': Buffer.from(content).toString('base64'),
	}
});