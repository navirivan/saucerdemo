import { test as base } from "@playwright/test";
import { ProductPage } from "../../src/pages/ProductPage";
import { CartPage } from "../../src/pages/CartPage";
import { CheckoutPage } from "../../src/pages/CheckoutPage";
import { OverviewPage } from "../../src/pages/OverviewPage";
import { CheckoutCompletePage } from "../../src/pages/CheckoutCompletePage";
import { LoginPage } from "../../src/pages/LoginPage";

type PageFixtures = {
	// loginTest,
	loginPage: LoginPage;
	productPage: ProductPage;
	cartPage: CartPage;
	checkoutPage: CheckoutPage;
	overviewPage: OverviewPage;
	checkoutCompletePage: CheckoutCompletePage;
};

export const pageFixtures = base.extend<PageFixtures>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	productPage: async ({ page }, use) => {
		await use(new ProductPage(page));
	},
	cartPage: async ({ page }, use) => {
		await use(new CartPage(page));
	},
	checkoutPage: async ({ page }, use) => {
		await use(new CheckoutPage(page));
	},
	overviewPage: async ({ page }, use) => {
		await use(new OverviewPage(page));
	},
	checkoutCompletePage: async ({ page }, use) => {
		await use(new CheckoutCompletePage(page));
	},
});
