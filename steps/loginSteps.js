import {Given, When, Then} from "@cucumber/cucumber"

import {chromium} from "@playwright/test"
import {strictEqual} from "assert";

let browser;//to create or launch browser
let page;

//Step definition for feature step(Given user is on sauce login page)
Given("user is on sauce login page", async function(){
    browser = await chromium.launch({headless: false});//launched/opened chromium browser
    page = await browser.newPage();//opening new page in browser
    await page.goto("https://www.saucedemo.com/")
})

//Step definition for feature step(When user enters username)
When("user enters username", async function(){
    await page.locator("#user-name").fill("standard_user");
})

When("user enters password", async function(){
    await page.getByPlaceholder("Password").fill("secret_sauce")
})

When("user clicks login button", async function(){
    await page.getByRole('button', {name: "Login", exact: true}).click()
})

Then("user should see homepage", async function(){
    //How to make sure that user is on the home page after clicking on login button?
    //We can validate title or any other element of home page
    const title = await page.title()//capture the title
    //Assertion
    strictEqual(title, "Swag Labs")
    await browser.close();//closing the browser
})