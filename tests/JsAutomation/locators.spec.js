import { test, expect } from '@playwright/test'
test("verify login modules",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
//xpath
// await page.locator("//input[@name='username']").fill("Admin")
//  await page.locator("//input[@name='password']").fill("admin123")
 //text()
 //await page.locator("//p[text( )='Forgot your password? ']").click()
 //await page.locator("//button[@type='submit']").click()
 //
//await page.locator("//a[@href='/web/index.php/admin/viewAdminModule']").click();
//And 
await page.locator("//input[@class='oxd-input oxd-input--active'][@name='username']").fill("Admin")
//partial test(contains)
await page.locator('//input[contains(.,"pass")]').fill("admin123")

})