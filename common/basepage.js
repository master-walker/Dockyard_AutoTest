var webdriver=require('selenium-webdriver');
const until=webdriver.until;

function BasePage(driver) {
	this.driver=driver;
}

BasePage.prototype={
	//get element
	getElement:function(locator) {
		return this.driver.wait( until.elementLocated(locator),5000);
		//return this.driver.findElement(locator);
	},
	//click element
	clickElement:function(locator) {
		//this.driver.findElement(locator);
		this.getElement(locator).click();
		this.driver.sleep(2000)
	},
	//input data
	inputData:function(locator,data) {
	this.getElement(locator).sendKeys(data);
	this.driver.sleep(2000);
	}

};



//basepage.prototype.getElement=function(locator) {
//	return this.driver.findElement(locator)
//};
//basepage.prototype.clickElement=function(locator) {
//	this.driver.findElement(locator).click();
//	this.driver.sleep(2000)
//};
//basepage.prototype.inputData=function(locator,data) {
//	this.driver.findElement(locator).sendKeys(data);
//	this.driver.sleep(2000)
//};



module.exports=BasePage;
