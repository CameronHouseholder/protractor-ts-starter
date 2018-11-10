import { Config } from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['../specs/addition.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
    }
}