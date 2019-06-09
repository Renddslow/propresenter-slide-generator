const xml = require('js2xmlparser');
const uuid = require('uuid/v1');

module.exports = (slides) => xml.parse('RVPresentationDocument', {
	'@': {
		CCLIArtistCredits: '',
		CCLIAuthor: '',
		CCLICopyrightYear: '',
		CCLIDisplay: 'false',
		CCLIPublisher: '',
		CCLISongNumber: '',
		CCLISongTitle: '',
		backgroundColor: '',
		buildNumber: '16156',
		category: 'Presentation',
		chordChartPath: '',
		docType: '0',
		drawingBackgroundColor: 'false',
		height: '1080',
		lastDateUsed: '',
		notes: '',
		os: '2',
		resourcesDirectory: '',
		selectedArrangementID: '',
		usedCount: '0',
		uuid: uuid(),
		versionNumber: '600',
		width: '1920'
	},
	RVTimeline: {
		'@': {
			duration: '0.000000',
			loop: 'false',
			playBackRate: '0.000000',
			rvXMLIvarName: 'timeline',
			selectedMediaTrackIndex: '0',
			timeOffset: '0.000000',
		},
		array: [
			{
				'@': { rvXMLIvarName: 'timeCues' },
			},
			{
				'@': { rvXMLIvarName: 'mediaTracks' },
			}
		]
	},
	array: [
		{
			'@': {
				rvXMLIvarName: 'groups',
			},
			RVSlideGrouping: {
				'@': {
					color: '0.3333333333333333 0.3333333333333333 0.3333333333333333 1',
					name: 'Sermon',
					uuid: uuid(),
				},
				array: {
					'@': { rvXMLIvarName: 'slides' },
					RVDisplaySlide: slides,
				},
			},
		},
		{
			'@': { rvXMLIvarName: 'arrangements' },
		},
	]
});