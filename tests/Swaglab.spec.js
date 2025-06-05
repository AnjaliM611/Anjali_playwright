 import { test, expect } from '@playwright/test';
 test("verify login functionality with valid credentials",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("standard_user")
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click()
expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})


 test ("verify login with valid username and invalid password",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("standard_user")
await page.locator("input[type='password']").fill("Anjali123")
await page.locator("input[type='submit']").click()
await expect(page.locator("h3[data-test='error']")).toBeVisible()

})


test("verify login with invalid username and valid password",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("Anjali")
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click()
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})


test("verify login functionality with invalid credentials",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("mamatha")
await page.locator("input[type='password']").fill("mahalingappa")
await page.locator("input[type='submit']").click()
await expect(page.locator("h3[data-test='error']")).toBeVisible()
}) 