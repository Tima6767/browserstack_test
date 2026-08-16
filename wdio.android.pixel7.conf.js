exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

    hostname: 'hub.browserstack.com',
  
    updateJob: false,
    specs: [
    './test/specs/test.e2e.js'
    ],
    exclude: [],
  
capabilities: [{
    platformName: 'android',

    'appium:automationName': 'UiAutomator2',

    'appium:app': 'TimofiiNativeDemoApp',   

    'bstack:options': {
        deviceName: 'Google Pixel 7',
        platformVersion: '13.0',
        projectName: 'First Webdriverio Android Project',
        buildName: 'Webdriverio Android',
        sessionName: 'first_test',
        debug: true
    }
}],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  };