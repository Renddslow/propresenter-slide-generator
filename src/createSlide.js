const makeUUID = require('uuid/v1');

module.exports = ({ label, imageUrl, elements, uuid = makeUUID() }) => {
	const slideArray = [
		{
			'@': { rvXMLIvarName: 'cues' },
		},
	];

	const displayElements = {
		'@': { rvXMLIvarName: 'displayElements' },
	};

	if (elements && elements.length) {
		displayElements.RVTextElement = elements;
	}

	slideArray.push(displayElements);

	const slide = {
		'@': {
			UUID: uuid,
			backgroundColor: '0 0 0 1',
			chordChartPath: '',
			drawingBackgroundColor: 'false',
			enabled: 'true',
			highlightColor: '0 0 0 0',
			hotKey: '',
			label,
			notes: '',
			socialItemCount: 0,
		},
		array: slideArray,
	};

	if (imageUrl) {
		slide.RVMediaCue = {
			'@': { UUID: makeUUID() },
			RVImageElement: {
				'@': {
					UUID: makeUUID(),
					bezelRadius: '0.000000',
					displayDelay: '0.000000',
					displayName: 'ImageElement',
					drawingFill: 'false',
					drawingShadow: 'false',
					drawingStroke: 'false',
					fillColor: '',
					flippedHorizontally: 'false',
					flippedVertically: 'false',
					format: 'Portable Network Graphics image',
					fromTemplate: 'false',
					imageOffset: '{0, 0}',
					locked: 'false',
					manufactureName: '',
					manufactureURL: '',
					opacity: '1.000000',
					persistent: 'false',
					rotation: '0.000000',
					rvXMLIvarName: 'element',
					scaleBehavior: '3',
					scaleSize: '{1, 1}',
					source: imageUrl,
					typeID: '0'
				},
				RVRect3D: {
					'@': { rvXMLIvarName: 'position' },
					'#': '{0 0 0 0 0}',
				},
				shadow: {
					'@': { rvXMLIvarName: 'shadow' },
					'#': '0.000000|0 0 0 0.3333333333333333|{4, -4}',
				},
				dictionary: {
					'@': { rvXMLIvarName: 'stroke' },
					NSColor: {
						'@': { rvXMLDictionaryKey: 'RVShapeElementStrokeColorKey' },
						'#': '0 0 0 1',
					},
					NSNumber: {
						'@': {
							hint: 'float',
							rvXMLDictionaryKey: 'RVShapeElementStrokeWidthKey',
						},
						'#': '1.000000',
					}
				}
			}
		};
	}

	return slide;
};