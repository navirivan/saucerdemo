import { Locator, Page } from "@playwright/test";
import { test } from "../tests/fixtures";

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
}
