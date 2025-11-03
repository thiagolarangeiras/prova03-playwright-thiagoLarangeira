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
}
