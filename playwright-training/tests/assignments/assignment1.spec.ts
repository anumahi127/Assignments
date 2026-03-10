import { test, expect } from '@playwright/test';

//test.describe refers  group of tests related to specific feature
test ("Assinment 1", async ({page}) => {

//1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto ("https://parabank.parasoft.com/parabank/index.htm");

//2.verify application logo is displayed
const logo = await page.locator("//img[@title='ParaBank']");
await expect(logo).toBeVisible();

//3.Verify application caption displayed as "Experience the difference"
const caption = await page.locator("//p[@class = 'caption']");
await expect(caption).toBeVisible();

//4.Enter invalid username
await page.locator("//input[@name = 'username']").fill('invaliduser');

//5.Enter empty Password
await page.locator ("//input[@name = 'password']").fill('');

//6.Click on login button
await page.locator("//input[@value='Log In']").click();

//7.Verify the error message "Please enter a username and password."
await expect(page.getByText('Please enter a username and password.')).toBeVisible();

//8.Click on admin page link
//await page.locator("//a[text() = 'Admin Page']").click();
await page.getByRole('link', {name : 'Admin Page'}).click();

//9.select the option "soap" from dba mode radio button
await page.locator("//input[@id = 'accessMode1']").check();

//10.Scroll to element dropdown
const dropdown = page.locator("//select[@id = 'loanProvider']");
await dropdown.scrollIntoViewIfNeeded();

//11.Select the option web service from the dropdown
await dropdown.selectOption('ws');

//12.click on submit button
await page.locator("//input[@value='Submit']").click();

//13.verify submission is successful by validating success message
await expect(page.getByText('Settings saved successfully.')).toBeVisible();

//14.Click on services page link
await page.locator("//ul[@class = 'leftmenu']//a[text() = 'Services']").click();

//15.wait for service page
await page.waitForLoadState('load');
await expect(page.getByText('Available Bookstore SOAP services:')).toBeVisible();

//16.Scroll down till bookstore services table
const table = page.locator("//span[text() = 'Bookstore services:']");
await table.scrollIntoViewIfNeeded();

//17.get total rows of books store services table
//18.get total columns of books store services table
//19.Print table data (row wise and column wise data)

});