import { test,expect } from '@playwright/test';
import { BookStorePage } from '../page_objects/book-store-page';

test('SCE3: search for books whose name contains "design"', async ({page}) => {
    const searchTerm = 'design';
    const bookStorePage = new BookStorePage(page);

    // Go to the Book Store page
    await bookStorePage.goto();

    // Search with the term
    await bookStorePage.searchBooks(searchTerm);

    // Verify if the results contain the search term or not
    const titles = await bookStorePage.getBookTitles();
    expect(titles.length).toBeGreaterThan(0);
    expect(titles.some(title => title.toLowerCase().includes(searchTerm))).toBeTruthy();
});
