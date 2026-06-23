import { test as base } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";

type Credentials = {
	username: string;
	password: string;
	errorMessage?: string;
};

type AuthFixtures = {
	loginHelper: {
		login: (username: string, password: string) => Promise<void>;
	};
	userCredentials: Credentials;
	authenticatedPage: import("@playwright/test").Page;
};

export const authFixtures = base.extend<AuthFixtures>({
	userCredentials: [
		{ username: "standard_user", password: "secret_sauce" },
		{ option: true },
	],

	loginHelper: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use({
			login: async (username: string, password: string) => {
				await loginPage.goto();
				await loginPage.login(username, password);
			},
		});
	},

	authenticatedPage: async ({ page, loginHelper, userCredentials }, use) => {
		await loginHelper.login(userCredentials.username, userCredentials.password);
		await use(page);
		console.log("logout");
	},
});
