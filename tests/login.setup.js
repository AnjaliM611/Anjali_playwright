import{test as setup,expect } from '@playwright/test';
setup('Avoid multiple logins',async({page}) => {
await page.goto("https://www.saucedemo.com/")

        await page.locator("input[data-test='username']").fill("standard_user")
        await page.locator("input[type='password']").fill("secret_sauce")
        await page.locator("input[type='submit']").click()
        //await page.waitForTimeout(5000)
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //await page.context().storageState()
        await page.context().storageState({path:".auth/user.json"})

})

 
