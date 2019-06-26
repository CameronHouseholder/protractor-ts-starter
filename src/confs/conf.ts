import { Config } from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['../specs/calc.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        print: function() {}
    },
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        let HtmlReporter = require('protractor-beautiful-reporter');
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        // reporters
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test_output/reports',
            preserveDirectory: false,
            docTitle: 'The Beautiful Report'
        }).getJasmine2Reporter());
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
}