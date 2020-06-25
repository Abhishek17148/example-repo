var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  showColors: true,
  specs: ['spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  //suite :
  //{
  //    Smoke : ['Chainlocator.js','DropDown.js']
  //}
};