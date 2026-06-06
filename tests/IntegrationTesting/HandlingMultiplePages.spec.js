test('Handling multiple windows', async({browser}) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("https://demoqa.com/");
    await page1.pause();
    const pagePromise = context.waitForEvent('page');
    await page1.locator('.banner-image').click();
    const page2 = await pagePromise;
    console.log(page2.url());
    await expect(page2).toHaveURL("https://www.toolsqa.com/selenium-training/");//Recommended -> Waits for navigation to complete, 
    // Handles redirects and Retries until test timeout

    await expect(page2).toHaveTitle("Tools QA - Selenium Training");//Assertion

})


test('Soft Assertion', async({page}) => {
    await page.goto('https://www.facebook.com/');
    await expect.soft(page).toHaveTitle('Instagram');//will fail the assertion but continue the further code execution
    console.log("This line will still run even if above assertion fails")
})

test('Hard Assertion', async({page}) => {
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle('Instagram');//will fail the assertion and stops the code execution 
    console.log("This line will not run if above assertion fails")
})
