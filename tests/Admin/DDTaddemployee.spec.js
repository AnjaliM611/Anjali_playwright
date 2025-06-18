import { test, expect } from '@playwright/test';
  const addemployee ={ 
   emp1:{firstname:'Anjali',lastname:'M'},
   emp2:{firstname:'sowmya',lastname:'T'} ,
   emp3:{firstname:'tejaswini',lastname:'j'} ,
   emp4:{firstname:'jamuna',lastname:'s'}, 
   emp5:{firstname:'pooja',lastname:'g'}

  }
    for (let employee in addemployee ){  

 test(`verify login functionality with add employee -${addemployee[employee].firstname}`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await page.locator("input[name='username']").fill("Admin")

        await page.locator("input[type='password']").fill("admin123")

        await page.locator("button[type='submit']").click()
         await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        await page.locator("//span[text()='PIM']").click()
        await page.locator("//a[normalize-space(text())='Add Employee']").click()
         //let randomtext = (Math.random() + 1).toString(36).substring(7);  
        await page.locator("//input[@placeholder='First Name']").fill(addemployee[employee].firstname)//+randomtext)
       await page.locator(" //input[@placeholder='Last Name']").fill(addemployee[employee].lastname)
       await page.locator("//button[@type='submit']").click()
 })
   }
