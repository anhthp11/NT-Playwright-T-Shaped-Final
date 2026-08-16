import { test as base, expect } from '@playwright/test';
import { BookStorePage } from '../../page_objects/book-store-page';
import { StudentPage } from '../../page_objects/student-page';

type AppFixture = {
    bookStorePage: BookStorePage;
    studentPage: StudentPage;
};

export const test = base.extend<AppFixture>({
    bookStorePage: async ({ page }, use) => {
        const bookStorePage = new BookStorePage(page);
        await use(bookStorePage);
    },
    studentPage: async ({ page }, use) => {
        const studentPage = new StudentPage(page);
        await use(studentPage);
    },
});

export { expect };