import { expect, test } from '@playwright/test';

test.describe('Startseite „Gute Nacht, Münster“', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('zeigt Titel, Überschrift und alle Abschnitte', async ({ page }) => {
		await expect(page).toHaveTitle('Verena Sulk – Schlafberatung in Münster');
		await expect(page.getByRole('heading', { level: 1 })).toHaveText('Gute Nacht, Münster.');
		for (const id of ['themen', 'ablauf', 'angebote', 'ueber-mich', 'fragen', 'kontakt']) {
			await expect(page.locator(`#${id}`)).toBeVisible();
		}
		await expect(page.getByRole('img', { name: /Lambertiturm/ })).toBeVisible();
	});

	test('Navigation springt zu den Abschnitten', async ({ page, isMobile }) => {
		test.skip(isMobile, 'Die Navigation ist auf schmalen Bildschirmen ausgeblendet');
		const nav = page.getByRole('navigation', { name: 'Hauptnavigation' });
		for (const [titel, anker] of [
			['Ablauf', '#ablauf'],
			['Angebote', '#angebote'],
			['Über mich', '#ueber-mich'],
			['Fragen', '#fragen'],
		]) {
			await nav.getByRole('link', { name: titel }).click();
			await expect(page).toHaveURL(new RegExp(`${anker}$`));
		}
	});

	test('Fragen lassen sich aufklappen', async ({ page }) => {
		const frage = page.locator('details').first();
		await expect(frage.locator('p')).toBeHidden();
		await frage.locator('summary').click();
		await expect(frage.locator('p')).toBeVisible();
	});

	test('keine horizontale Scrollleiste', async ({ page }) => {
		const ueberstand = await page.evaluate(
			() => document.documentElement.scrollWidth - window.innerWidth
		);
		expect(ueberstand).toBeLessThanOrEqual(0);
	});
});
