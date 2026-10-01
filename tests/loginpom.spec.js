
import{ test, expect } from '@playwright/test';
import {loginPage} from "../Pageobjectmodel/login.pom.js";
import logindata from "../testData/login.json"
let page;
let Login
 test.describe('Login functionality with POM',()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage();
        Login=new loginPage(page);
        await Login.launchurl();
    }) 
test("verify login with valid creds",async()=>{
   await Login.loginwithcreds(logindata.username,logindata.password);
   //await expect(login.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

//

})

