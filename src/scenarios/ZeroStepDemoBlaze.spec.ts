import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep demo blaze', async ({ page }) => {
  await page.goto('https://demoblaze.com');

  const aiArgs = { page, test };
  await ai('Open the menu, Sign up, fill the fields with random data and then open the menu, Log in, and use the same values', aiArgs);
});
