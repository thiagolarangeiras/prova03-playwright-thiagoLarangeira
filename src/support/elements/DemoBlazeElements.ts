import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContactElements extends BaseElements {
	constructor(readonly page: Page) {
		super(page);
		this.page = page;
	}

	getLoginButton(): Locator {
		return this.page.locator(`//*[@id="login2"]`);
	}

	getUsernameField(): Locator {
		return this.page.locator(`//*[@id="loginusername"]`);
	}

	getPasswordField(): Locator {
		return this.page.locator(`//*[@id="loginpassword"]`);
	}

	getLoginConfirmButton(): Locator {
		return this.page.locator(`//*[@id="logInModal"]/div/div/div[3]/button[2]`);
	}

	getNameOfLoggedUser(): Locator {
		return this.page.locator(`//*[@id="nameofuser"]`);
	}
}
