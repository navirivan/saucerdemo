import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

type AuthFixtures = {
	loginHelper: {
		login: (username: string, password: string) => Promise<void>;
	};
	authenticatedPage: import("@playwright/test").Page;
};

export const authFixtures = base.extend<AuthFixtures>({
	loginHelper: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use({
			login: async (username: string, password: string) => {
				await loginPage.goto();
				await loginPage.login(username, password);
			},
		});
	},

	authenticatedPage: async ({ page, loginHelper }, use) => {
		await loginHelper.login("standard_user", "secret_sauce");
		await use(page);
		console.log("logout");
	},
});
