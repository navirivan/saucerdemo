import { mergeTests } from "@playwright/test";
import { pageFixtures } from "./page.fixtures";
import { authFixtures } from "./auth.fixtures";

export const test = mergeTests(pageFixtures, authFixtures);
export { expect } from "@playwright/test";
