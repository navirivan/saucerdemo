import { test, expect } from "./fixtures";

const testData = [2, 3, 4];
testData.forEach((data) => {
	test(`Add ${data} items to cart`, async ({
		authenticatedPage,
		productPage,
	}) => {
		await productPage.validateProductPageIsLoaded();
		await productPage.addNItems(data);
		await expect(productPage.cartBadge).toHaveText(data.toString());
	});
});

test("Successfully making a purchase without any item", async ({
	authenticatedPage,
	productPage,
	cartPage,
	checkoutPage,
	overviewPage,
	checkoutCompletePage,
}) => {
	await productPage.addRandomItems();
	await productPage.goToCart();
	await expect(productPage.page).toHaveURL(/.*\/cart\.html/);
	await cartPage.removeFirstItem();
	await cartPage.checkingOut();
	await expect(checkoutPage.page).toHaveURL(/.*\/checkout-step-one\.html/);
	await checkoutPage.inputInformation("John", "Maven", "12345");
	await expect(checkoutPage.page).toHaveURL(/.*\/checkout-step-two\.html/);
	await expect(overviewPage.totalSum).toContainText("$0.00");
	await overviewPage.finish();
	await expect(checkoutCompletePage.page).toHaveURL(
		/.*\/checkout-complete\.html/,
	);
	await expect(checkoutCompletePage.thankYouMessage).toHaveText(
		"Thank you for your order!",
	);
});
