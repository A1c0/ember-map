module.exports = {
	testPage: 'tests/index.html?hidepassed',
	disableWatching: true,
	launchInCi: [
		'Chrome'
	],
	launchInDev: [
		'Chrome'
	],
	browserArgs: {
		Chrome: {
			ci: [
				// --no-sandbox is needed when running Chrome inside a container
				process.env.CI ? '--no-sandbox' : null,
				'--headless',
				'--disable-gpu',
				'--disable-dev-shm-usage',
				'--disable-software-rasterizer',
				'--mute-audio',
				'--remote-debugging-port=0',
				'--window-size=1440,900'
			].filter(Boolean)
		}
	}
};
