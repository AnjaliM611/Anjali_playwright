import{test,expect } from '@playwright/test';

    test.describe('Validate swaglab Login functionality with SessionStorage', () => {
      test('verify login ',  async ({ page }) => {

       await page.goto("https://www.saucedemo.com/")

        await page.locator("input[data-test='username']").fill("standard_user")
        await page.locator("input[type='password']").fill("secret_sauce")
        await page.locator("input[type='submit']").click()
         

     })

//    test("check cart" ,async()=>{
//        await page.goto ("https://www.saucedemo.com/cart.html")
//     })
})
