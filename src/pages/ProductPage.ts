import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
	readonly productHeader: Locator;
	readonly addItemButton: Locator;
	readonly cartIcon: Locator;
	readonly cartBadge: Locator;

	constructor(page: Page) {
		super(page);
		this.productHeader = page.locator(".header_secondary_container");
		this.addItemButton = page.locator(".btn_inventory");
		this.cartIcon = page.locator(".shopping_cart_link");
		this.cartBadge = page.locator(".shopping_cart_badge");
	}

	async addNItems(n: number) {
		for (let i: number = 0; i < n; i++) {
			await this.clickElement(this.addItemButton.nth(i));
			// await expect(this.addItemButton.nth(i)).toHaveText("Remove");
		}
	}

	async addRandomItem() {
		const availableButtons = this.addItemButton.filter({
			hasText: "ADD TO CART",
		});
		const count = await availableButtons.count();
		const randomIndex = Math.floor(Math.random() * count);

		await this.clickElement(availableButtons.nth(randomIndex));
		// await expect(this.addItemButton.nth(randomItem)).toHaveText("Remove");
	}

	async goToCart() {
		await this.clickElement(this.cartIcon);
	}
}
