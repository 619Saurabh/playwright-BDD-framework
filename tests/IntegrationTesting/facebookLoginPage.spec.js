test('verify facebook title', async() => {
    await page.goto("https://www.facebook.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Facebook")
})
