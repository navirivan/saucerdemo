import { test } from "../../../src/fixtures";

test.describe("Checkout process", () => {
	test("Successfully completing purchase after removing the only item in cart", async ({
		authenticatedPage,
		productPage,
		cartPage,
		checkoutPage,
		overviewPage,
		checkoutCompletePage,
	}) => {
		await productPage.addRandomItem();
		await productPage.goToCart();
		await cartPage.validateElementToHaveUrl(cartPage.page, "cart.html");
		await cartPage.removeFirstItem();
		await cartPage.checkingOut();
		await checkoutPage.validateElementToHaveUrl(
			checkoutPage.page,
			"checkout-step-one.html",
		);
		await checkoutPage.inputInformation("John", "Maven", "12345");
		await checkoutPage.validateElementToHaveUrl(
			checkoutPage.page,
			"checkout-step-two.html",
		);
		await overviewPage.validateElementToContainText(
			overviewPage.totalSum,
			"$0.00",
		);
		await overviewPage.finish();
		await checkoutCompletePage.validateElementToHaveUrl(
			checkoutCompletePage.page,
			"checkout-complete.html",
		);
		await checkoutCompletePage.validateElementToHaveText(
			checkoutCompletePage.thankYouMessage,
			"Thank you for your order!",
		);
	});
});
