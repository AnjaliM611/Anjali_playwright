import { test, expect } from '@playwright/test';
test("verify check box",async({page})=>{
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill("Admin")

        await page.locator("input[type='password']").fill("admin123")

        await page.locator("button[type='submit']").click()
         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        await page.locator("//span[text()='PIM']").click()
        await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[1]").click()
        await page.locator("//div[@class='oxd-table orangehrm-employee-list']").click()
        await page.locator("//div[@class='oxd-table orangehrm-employee-list']").click()
        for(let i=1;i<=5;i++){
            console.log(i)
        }

        
    })