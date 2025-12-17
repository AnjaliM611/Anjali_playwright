import { expect } from "@playwright/test";
export class dashboard{
    constructor(page){
        this.page=page
        this.adminButton=page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]')
    }
}