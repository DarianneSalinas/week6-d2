const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

// const {addMovie} = require('../functions/addMovie.js')

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5506/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

// test('Add a movie', async () => {
//     await addMovie(driver)
//     await driver.sleep(3000)
// })


test('delete works', async () => {
await driver.findElement(By.xpath('//input')).sendKeys('House of Flying Daggers\n');
await driver.findElement(By.xpath('(//button)[2]')).click();

// const ul = await driver.findElement(By.xpath('//ul'))
// expect(ul.hasChildren).toBeFalsy();

// const findMovie = await driver.findElement(By.xpath('//ul[contains(text(), "")]'))
// const displayed = findMovie.isDisplayed
// expect(displayed).toBeTruthy

    const deleteMovie = async (driver) => {
    await addMovie(driver);
    await driver.findElement(By.xpath("//ul/li[1]/button")).click();
    await driver.sleep(1000);
    const list = await driver.findElement(By.xpath("//ul"));
    expect(list.hasChildren).toBeFalsy();
  };

})

// const watchedAlert = async (driver) => {
//     await driver.findElement(By.xpath('//span')).click();

//     await driver.sleep(1000)

//     const message = await driver.findElement(By.xpath('//[@id="message"]'));

//     const hidden = await driver.findElement(By.xpath('//[@class="hide"]'))

//     expect(message).not.toContain(hidden)

// }