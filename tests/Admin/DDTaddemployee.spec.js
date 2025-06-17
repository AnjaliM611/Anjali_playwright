import { test, expect } from '@playwright/test';
  const addemployee={emp1:"sowmya",
                       emp2:"jammu",
                       emp3:"Ashwini",
                       emp4:"tejaswini",
                       emp5:"pooja"
                     }
    for (let employee in addemployee ){  

 test(`verify login functionality with add employee -${addemployee[employee]}`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill("Admin")

        await page.locator("input[type='password']").fill("admin123")

        await page.locator("button[type='submit']").click()
         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        await page.locator("//span[text()='PIM']").click()
        await page.locator("//a[normalize-space(text())='Add Employee']").click()
         //let randomtext = (Math.random() + 1).toString(36).substring(7);  
        await page.locator("//input[@placeholder='First Name']").fill(addemployee[employee])//+randomtext)
       await page.locator(" //input[@placeholder='Last Name']").fill("M")
       await page.locator("//button[@type='submit']").click()
            // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/320')
    })
   }
