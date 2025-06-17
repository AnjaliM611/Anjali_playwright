import { test, expect } from '@playwright/test';
test("verify swich statement",async({page,browserName})=>{
    switch(browserName){
        case "webkit":{
            await page.goto("https://www.flipkart.com/");
             //await page.close()
          }
        break;
         case "chromium":{
           await page.goto("https://www.amazon.in/");
           // await page.close()
        }
        break;
         case "firefox":{
              await page.goto("https://www.myntra.com/");
            //await page.close()
        
        }
    }
  })
    