// const {By} = require('selenium-webdriver');

// const addMovie = async (driver) => {
//     await driver.findElement(By.xpath('//input')).sendKeys('Twilight')
//     await driver.sleep(1000)

//     await driver.findElement(By.xpath('//button')).click()
//     await driver.sleep(1000)

//     //this version would give you the first li since we are doing index of 1 
//     //const movie = await driver.findElement(By.xpath('(//li)[1]')) 
//     const movie = await driver.findElement(By.xpath('//li'))

//     //if list display is successfully created then expect it to be true
//     const displayed = movie.isDisplayed();

//     expect(displayed).toBeTruthy()
// }

// module.exports = {
//     addMovie
// }
