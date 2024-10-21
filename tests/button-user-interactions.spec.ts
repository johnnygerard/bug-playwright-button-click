import { Locator, test } from "@playwright/test";

test.describe("Button user interactions", () => {
  test.use({ hasTouch: true }); // Required for `tap` action
  let button: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://johnnygerard.github.io/bug-playwright-button-click/");
    button = page.getByTestId("button");
  });

  test("Click", async ({ page }) => {
    await button.click();
  });

  test("Press enter", async ({ page }) => {
    await button.press("Enter");
  });

  test("Tap", async ({ page }) => {
    await button.tap();
  });
});
