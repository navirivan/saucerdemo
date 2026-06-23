import { Locator, Page } from "@playwright/test";
import { test, expect } from "@fixtures/index";

export class BasePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async clickElement(locator: Locator) {
		await test.step(`Clicking on element: ${locator.toString()}`, async () => {
			await locator.click();
		});
	}

	async fillText(locator: Locator, text: string) {
		await test.step(`Filling text: "${text}" into element: ${locator.toString()}`, async () => {
			await locator.fill(text);
		});
	}

	async navigateTo(url: string) {
		await test.step(`Navigating to URL: ${url}`, async () => {
			await this.page.goto(url);
		});
	}

	async validateElementToHaveText(locator: Locator, expectedText: string) {
		await test.step(`Validating element: ${locator.toString()} has text: "${expectedText}"`, async () => {
			await expect(locator).toHaveText(expectedText);
		});
	}

	async validateElementToContainText(locator: Locator, expectedText: string) {
		await test.step(`Validating element: ${locator.toString()} contains text: "${expectedText}"`, async () => {
			await expect(locator).toContainText(expectedText);
		});
	}

	async validateElementToBeVisible(locator: Locator) {
		await test.step(`Validating element: ${locator.toString()} is visible`, async () => {
			await expect(locator).toBeVisible();
		});
	}

	async validateElementToHaveUrl(page: Page, expectedUrl: string) {
		await test.step(`Validating URL contains: "${expectedUrl}"`, async () => {
			await expect(page).toHaveURL((url) =>
				url.toString().includes(expectedUrl),
			);
		});
	}

	async validateErrorMessage(page: Page, expectedErrorMessage: string) {
		await test.step(`Validating error message: "${expectedErrorMessage}"`, async () => {
			const errorMessageLocator = page.locator(".error-message-container");
			await expect(errorMessageLocator).toHaveText(expectedErrorMessage);
		});
	}
}
