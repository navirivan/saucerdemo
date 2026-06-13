import { test, expect } from "./fixtures";

test("Login with valid credentials", async ({ loginHelper, page }) => {
	// await loginPage.goto();
	// await loginPage.validateLoginPageIsLoaded();
	await loginHelper.login("standard_user", "secret_sauce");
	await expect(page).toHaveURL(/.*\/inventory\.html/);
});
