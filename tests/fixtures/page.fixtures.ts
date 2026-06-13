import { test as base } from "@playwright/test";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { OverviewPage } from "../../pages/OverviewPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";

type PageFixtures = {
	// loginTest,
	productPage: ProductPage;
	cartPage: CartPage;
	checkoutPage: CheckoutPage;
	overviewPage: OverviewPage;
	checkoutCompletePage: CheckoutCompletePage;
};

export const pageFixtures = base.extend<PageFixtures>({
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
