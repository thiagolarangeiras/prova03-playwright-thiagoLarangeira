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

	getMessageWrongPass() : Locator {
		return this.page.locator('text=Wrong password.');
	}

	getNameOfLoggedUser(): Locator {
		return this.page.locator(`//*[@id="nameofuser"]`);
	}

	getTableProducts(): Locator {
		return this.page.locator(`//*[@id="tbodyid"]`);
	}

	getCartButton(): Locator {
		return this.page.locator(`//*[@id="navbarExample"]/ul/li[4]/a`);
	}

	getFirstItem(): Locator {
		return this.page.locator(`//*[@id="tbodyid"]/div[1]/div/div/h4/a`);
	}

	getAddToCartButton(): Locator {
		return this.page.locator(`//*[@id="tbodyid"]/div[2]/div/a`);
	}

	getPlaceOrdemButton(): Locator {
		return this.page.locator(`//*[@id="page-wrapper"]/div/div[2]/button`);
	}

	getCheckoutNameField(): Locator {
		return this.page.locator(`//*[@id="name"]`);
	}

	getCheckoutCountryField(): Locator {
		return this.page.locator(`//*[@id="country"]`);
	}

	getCheckoutCityField(): Locator {
		return this.page.locator(`//*[@id="city"]`);
	}

	getCheckoutCreditCardField(): Locator {
		return this.page.locator(`//*[@id="card"]`);
	}

	getCheckoutMonthField(): Locator {
		return this.page.locator(`//*[@id="month"]`);
	}

	getCheckoutYearField(): Locator {
		return this.page.locator(`//*[@id="year"]`);
	}

	getPucharseButton(): Locator {
		return this.page.locator(`//*[@id="orderModal"]/div/div/div[3]/button[2]`);
	}

	getFinishButton(): Locator {
		return this.page.locator(`//html/body/div[10]/div[7]/div/button`);
	}
}