//var obj = require('./JsobjectDemo.js');
var obj1 = require('./LoginObject');
//var obj2 = require('./demo');
var d = require('./data.js');
var using = require('jasmine-data-provider');
var EC = protractor.ExpectedConditions;
describe('Insight First App', function () {
     beforeEach(function () {
          obj1.getURL();
     });
     using(d.datadrive, function (data, description) {
          it('Login Functionality' + description, function () {
               obj1.username.sendKeys(data.email);
               obj1.password.sendKeys(data.pswd);
               obj1.button.click();
               browser.sleep(5000);
               expect(browser.getTitle()).toEqual('Insightsfirst');
          });
       /*   it('Radio Button Functionality' + description, function () {
               browser.sleep(3000);
               expect (obj2.RadioButton.count()).toBe(3);
               browser.sleep(3000);
               //obj2.randomradiobutton.click();
               obj2.randomradiobutton.click();
               browser.sleep(3000);
               //expect(browser.getTitle()).toEqual('Insight First');
          }); 
          */   
          afterEach(function () {
               console.log("Test is completed");
          });
     });
});