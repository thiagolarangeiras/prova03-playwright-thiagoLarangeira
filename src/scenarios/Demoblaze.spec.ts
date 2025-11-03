import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import DemoBlaze from '../support/pages/DemoBlaze';
import { User } from '../support/types';

test.describe('Testando loja demo blaze', () => {
	const CONFIG = join(__dirname, '../support/fixtures/config.yml');
	let demoBlaze: DemoBlaze;
	const BASE_URL = TheConfig.fromFile(CONFIG)
		.andPath('application.home')
		.retrieveData();
	
	let user: User = {
		name: "awd123",
		password: "123"
	};

	test.beforeEach(async ({ page }) => {
		demoBlaze = new DemoBlaze(page);
		await page.goto(BASE_URL);
	});

	test('Preencher formulário de login com dados válidos', async () => {
		await demoBlaze.login(user);
	});
});
