import{ test, expect } from '@playwright/test';
test("verify valid username and password",async({page})=>{ 
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator("#username").fill("student")
await page.locator("#password").fill("Password123")
await page.locator("#submit").click()
await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
await expect(page.getByText("Logged In Successfully")).toBeVisible();
await expect(page.getByText("Congratulations student. You successfully logged in!")).toBeVisible();
await expect(page.getByText("Log out")).toBeVisible();
    })

test("verify invalid username and valid password",async({page})=>{ 
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator("#username").fill("Anjali")
await page.locator("#password").fill("Password123")
await page.locator("#submit").click()
await expect(page.getByText("Your username is invalid!")).toBeVisible();
  }
)