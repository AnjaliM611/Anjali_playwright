
import { expect } from "@playwright/test";
export class loginPage{
    constructor(page){
        this.page=page
        this.usernameInput=page.locator('input[name="username"]')
        this.passwordInput=page.locator('input[type="password"]')
        this.loginButton=page.locator('button[type="submit"]')
    }

   async launchurl(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/")
   }
   async loginwithcreds(username,password){
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password) 
    await this.loginButton.click()
   }
}