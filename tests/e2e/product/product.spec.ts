import { test } from "../../../src/fixtures";

const testData = [2, 3, 4];

test.describe("Adding items to cart", () => {
	testData.forEach((data) => {
		test(`Add ${data} items to cart`, async ({
			authenticatedPage,
			productPage,
		}) => {
			await productPage.validateElementToBeVisible(productPage.productHeader);
			await productPage.addNItems(data);
			await productPage.validateElementToHaveText(
				productPage.cartBadge,
				data.toString(),
			);
		});
	});
});
