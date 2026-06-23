import { UserCredentials } from "../types/user.type";

export const validUsers: UserCredentials[] = [
	{ username: "standard_user", password: "secret_sauce" },
];

export const invalidUsers: UserCredentials[] = [
	{
		username: "locked_out_user",
		password: "secret_sauce",
		errorMessage: "Epic sadface: Sorry, this user has been locked out.",
	},
	{
		username: "problem_user",
		password: "secret_sauce",
		errorMessage:
			"Epic sadface: Username and password do not match any user in this service",
	},
	{
		username: "performance_glitch_user",
		password: "secret_sauce",
		errorMessage:
			"Epic sadface: Username and password do not match any user in this service",
	},
];

export const allUsers: UserCredentials[] = [...validUsers, ...invalidUsers];
