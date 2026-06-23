import { test } from "../../../src/fixtures";
import { allUsers } from "../../../src/data/user.data";

test.describe("Login functionality", () => {
	for (const user of allUsers) {
		test.use({ userCredentials: user });
		test(`Login as ${user.username}`, async ({ loginHelper, loginPage }) => {
			await loginHelper.login(user.username, user.password);
			if (user.errorMessage) {
				await loginPage.validateErrorMessage(loginPage.page, user.errorMessage);
				return;
			} else {
				await loginPage.validateElementToHaveUrl(
					loginPage.page,
					"inventory.html",
				);
			}
		});
	}
});
