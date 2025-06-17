import { test, expect } from '@playwright/test';
test("verify else if conditon",async({page,browserName})=>{
    if(browserName=="chromium"){
        await page.goto("https://www.flipkart.com/");
        await page.close()
    }
    else if(browserName=="webkit"){
        await page.goto("https://www.amazon.in/");
        await page.close()
    }

})
