var webdriver=require('selenium-webdriver')
var util=webdriver.util

function basepage(driver) {
	this.driver=driver;
	// this.locator=locator;
};

basepage.prototype.getElement=function(locator) {
	return this.driver.findElement(locator)
};
basepage.prototype.clickElement=function(locator) {
	this.driver.findElement(locator).click();
	this.driver.sleep(2000)
};
basepage.prototype.inputData=function(locator,data) {
	this.driver.findElement(locator).sendKeys(data);
	this.driver.sleep(2000)
};


// var getElement=function getElement(driver,locators) {
// 	return driver.findElement(locators);
// }
// var clickElement=function clickElement(driver,locators) {
// 	var element=getElement(driver,locators);
// 	element.click()
// 	driver.sleep(5000)
//
// }
// var inputData=function inputData(driver,locators,data) {
// 	var element=getElement(driver,locators);
// 	element.sendKeys(data)
// }

module.exports=basepage;
