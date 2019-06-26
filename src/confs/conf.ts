import { Config } from 'protractor';
let HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['../specs/calc.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        // reporters
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test_output/reports',
            preserveDirectory: false,
            docTitle: 'The Beautiful Report'
        }).getJasmine2Reporter());
    }
}