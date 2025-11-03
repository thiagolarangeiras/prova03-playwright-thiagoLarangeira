import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import DemoBlazeElements from '../elements/DemoBlazeElements';
import { getVar, User } from '../types';
import { faker } from '@faker-js/faker';

export default class HomePage extends BasePage {
	readonly blazeElements: DemoBlazeElements;

	constructor(readonly page: Page) {
		super(page);
		this.page = page;
		this.blazeElements = new DemoBlazeElements(page);
	}

	async login(user: User): Promise<void> {
		await this.blazeElements.getLoginButton().click();
		await this.blazeElements.getUsernameField().fill(user.name);
		await this.blazeElements.getPasswordField().fill(user.password);
		await this.blazeElements.getLoginConfirmButton().click();
		await expect(this.blazeElements.getNameOfLoggedUser()).toHaveText(`Welcome ${user.name}`);
	}

	async loginErrado(user: User): Promise<void> {
		await this.blazeElements.getLoginButton().click();
		await this.blazeElements.getUsernameField().fill(user.name);
		await this.blazeElements.getPasswordField().fill(`${user.password}WRONG`);
		this.page.once('dialog', async (dialog) => {
			expect(dialog.message()).toContain('Wrong password.');
			await dialog.accept();
		});
		await this.blazeElements.getLoginConfirmButton().click();
	}

	async checarCarrinhoVazio(): Promise<void> {
		await this.page.goto(getVar("cart"));
		const parent = this.page.locator(`//*[@id="tbodyid"]`);
		const divCount = await parent.locator('tr').count();
		expect(divCount).toBe(0);
	}

	async adicionarItemAoCarrinho(): Promise<void> {
		await this.blazeElements.getFirstItem().click();
		this.page.once('dialog', async (dialog) => {
			expect(dialog.message()).toContain('Product added');
			await dialog.accept();
		});
		await this.blazeElements.getAddToCartButton().click();
	}

	async checarCarrinhoComItem(): Promise<void> {
		await this.page.goto(getVar("cart"));
		const parent = this.page.locator(`//*[@id="tbodyid"]`);
		await this.page.waitForTimeout(5000);
		const divCount = await parent.locator('tr').count();
		expect(divCount).toBeGreaterThanOrEqual(1);
	}

	async finalizarCompra(): Promise<void> {
		await this.page.goto(getVar("cart"));
		await this.blazeElements.getPlaceOrdemButton().click();
		await this.blazeElements.getCheckoutNameField().fill(faker.person.fullName());
		await this.blazeElements.getCheckoutCountryField().fill(faker.location.country());
		await this.blazeElements.getCheckoutCityField().fill(faker.location.city());
		await this.blazeElements.getCheckoutCreditCardField().fill(faker.finance.creditCardNumber());
		await this.blazeElements.getCheckoutMonthField().fill(faker.date.month());
		await this.blazeElements.getCheckoutYearField().fill("2025");
		await this.blazeElements.getPucharseButton().click();
		await this.blazeElements.getFinishButton().click();
	}
}