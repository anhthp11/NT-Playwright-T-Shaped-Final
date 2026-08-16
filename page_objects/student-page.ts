import { Page, Locator } from "@playwright/test";
import { baseUrl } from '../env/url';
import { gender, hobbies, studentAddress, studentDateOfBirth, studentEmail, studentGender, studentHobbies, studentMobile, studentName, studentPicture, studentStateAndCity, studentSubjects } from "../env/locator";

export class StudentPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    //readonly genderInput: Locator;
    readonly mobileInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectsInput: Locator;
    //readonly subjectsDropdownValue: Locator;
    readonly hobbiesInput: Locator
    readonly pictureInput: Locator;
    readonly currentAddressInput: Locator;
    readonly stateInput: Locator;
    //readonly stateDropdownValue: Locator;
    readonly cityInput: Locator;
    //readonly cityDropdownValue: Locator;
    readonly submitButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.firstNameInput = page.getByTestId("firstName");
        this.lastNameInput = page.getByTestId("lastName");
        this.emailInput = page.getByTestId("userEmail");
        //this.genderInput = page.locator(gender);
        this.mobileInput = page.getByTestId("userNumber");
        this.dateOfBirthInput = page.getByTestId("dateOfBirthInput");
        this.subjectsInput = page.getByTestId("subjectsInput");
        //this.subjectsDropdownValue = page.locator(subjectsValue);
        this.hobbiesInput = page.locator(hobbies);
        this.pictureInput = page.getByTestId("uploadPicture");
        this.currentAddressInput = page.getByTestId("currentAddress");
        this.stateInput = page.getByTestId("state");
        //this.stateDropdownValue = page.locator(stateValue);
        this.cityInput = page.getByTestId("city");
        //this.cityDropdownValue = page.locator(cityValue);
        this.submitButton = page.getByTestId("submit");
    }
    async goto() {
        await this.page.goto(baseUrl + '/automation-practice-form');
    }
    async fillFirstName(firstName:string) {
        await this.firstNameInput.fill(firstName);
    }
    async fillLastName(lastName:string) {
        await this.lastNameInput.fill(lastName);
    }
    async fillEmail(email:string) {
        await this.emailInput.fill(email);
    }
    async fillMobile(mobile:string) {
        await this.mobileInput.fill(mobile);
    }
    async fillDateOfBirth(dateOfBirth:string) {
        await this.dateOfBirthInput.fill(dateOfBirth);
    }
    async selectSubjects(subjects:string[]) {
        for (const subject of subjects) {
            await this.subjectsInput.fill(subject);
            await this.page.locator(`//div[text()="${subject}"]`).click();
        }
    }
    async fillCurrentAddress(address:string) {
        await this.currentAddressInput.fill(address);
    }
    async selectGender(gender:string) {
        await this.page.locator(`//input[@value="${gender}" and @name="gender"]`).check();
   }
    async selectHobbies(hobbies:string[]) {
        for (const hobby of hobbies) {
            await this.page.locator(`//label[text()="${hobby}"]/preceding-sibling::input`).check();
        }
    }
    async uploadPicture(picture:string) {
        await this.pictureInput.setInputFiles(picture);
    }
    async fillAddress(address:string) {
        await this.currentAddressInput.fill(address);
    }
    async selectState(state:string) {
        await this.stateInput.click();
        await this.page.getByText(state).click();
    }
    async selectCity(city:string) {
        await this.cityInput.click();
        await this.page.getByText(city).click();
    }
    async submitForm() {
        await this.submitButton.click();
    }

    async getFormSubmissionAllFields() {
        const name = await this.page.locator(studentName).textContent();
        const email = await this.page.locator(studentEmail).textContent();
        const gender = await this.page.locator(studentGender).textContent();
        const mobile = await this.page.locator(studentMobile).textContent();
        const dateOfBirth = await this.page.locator(studentDateOfBirth).textContent();
        const subjects = await this.page.locator(studentSubjects).textContent();
        const hobbies = await this.page.locator(studentHobbies).textContent();
        const picture = await this.page.locator(studentPicture).textContent();
        const address = await this.page.locator(studentAddress).textContent();
        const stateAndCity = await this.page.locator(studentStateAndCity).textContent();
        return { name, email, gender, mobile, dateOfBirth, subjects, hobbies, picture, address, stateAndCity };
    }
    async getFormSubmissionRequiredFields() {
        const firstAndLastName = await this.page.locator(studentName).textContent();
        const gender = await this.page.locator(studentGender).textContent();
        const mobile = await this.page.locator(studentMobile).textContent();
        return { firstAndLastName, gender, mobile };
    }
}