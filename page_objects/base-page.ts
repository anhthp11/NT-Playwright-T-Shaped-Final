import type { Page } from '@playwright/test';
import { baseUrl } from '../env/url';

export interface NavigablePage {
    goto(): Promise<void>;
}

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    protected async navigateTo(path: string): Promise<void> {
        await this.page.goto(`${baseUrl}${path}`);
    }
}

export async function navigateToPage(page: NavigablePage): Promise<void> {
    await page.goto();
}
