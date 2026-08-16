# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-register-student.spec.ts >> SCE1: Register a student with all fields filled
- Location: tests\test-register-student.spec.ts:12:1

# Error details

```
ReferenceError: subjectsValue is not defined
```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { baseUrl } from '../env/url';
  3   | import { genderMale, hobbiesSports, studentAddress, studentDateOfBirth, studentEmail, studentGender, studentHobbies, studentMobile, studentName, studentPicture, studentStateAndCity, studentSubjects } from "../env/locator";
  4   | 
  5   | export class StudentPage {
  6   |     readonly page: Page;
  7   |     readonly firstNameInput: Locator;
  8   |     readonly lastNameInput: Locator;
  9   |     readonly emailInput: Locator;
  10  |     readonly genderInput: Locator;
  11  |     readonly mobileInput: Locator;
  12  |     readonly dateOfBirthInput: Locator;
  13  |     readonly subjectsInput: Locator;
  14  |     readonly subjectsDropdownValue: Locator;
  15  |     readonly hobbiesInput: Locator
  16  |     readonly pictureInput: Locator;
  17  |     readonly currentAddressInput: Locator;
  18  |     readonly stateInput: Locator;
  19  |     readonly stateDropdownValue: Locator;
  20  |     readonly cityInput: Locator;
  21  |     readonly cityDropdownValue: Locator;
  22  |     readonly submitButton: Locator;
  23  | 
  24  |     constructor(page:Page) {
  25  |         this.page = page;
  26  |         this.firstNameInput = page.getByTestId("firstName");
  27  |         this.lastNameInput = page.getByTestId("lastName");
  28  |         this.emailInput = page.getByTestId("userEmail");
  29  |         this.genderInput = page.locator(genderMale);
  30  |         this.mobileInput = page.getByTestId("userNumber");
  31  |         this.dateOfBirthInput = page.getByTestId("dateOfBirthInput");
  32  |         this.subjectsInput = page.getByTestId("subjectsInput");
> 33  |         this.subjectsDropdownValue = page.locator(subjectsValue);
      |                                                   ^ ReferenceError: subjectsValue is not defined
  34  |         this.hobbiesInput = page.locator(hobbiesSports);
  35  |         this.pictureInput = page.getByTestId("uploadPicture");
  36  |         this.currentAddressInput = page.getByTestId("currentAddress");
  37  |         this.stateInput = page.getByTestId("state");
  38  |         this.stateDropdownValue = page.locator(stateValue);
  39  |         this.cityInput = page.getByTestId("city");
  40  |         this.cityDropdownValue = page.locator(cityValue);
  41  |         this.submitButton = page.getByTestId("submit");
  42  |     }
  43  |     async goto() {
  44  |         await this.page.goto(baseUrl + '/automation-practice-form');
  45  |     }
  46  |     async fillFirstName(firstName:string) {
  47  |         await this.firstNameInput.fill(firstName);
  48  |     }
  49  |     async fillLastName(lastName:string) {
  50  |         await this.lastNameInput.fill(lastName);
  51  |     }
  52  |     async fillEmail(email:string) {
  53  |         await this.emailInput.fill(email);
  54  |     }
  55  |     async fillMobile(mobile:string) {
  56  |         await this.mobileInput.fill(mobile);
  57  |     }
  58  |     async fillDateOfBirth(dateOfBirth:string) {
  59  |         await this.dateOfBirthInput.fill(dateOfBirth);
  60  |     }
  61  |     async selectSubjects(subjects:string[]) {
  62  |         for (const subject of subjects) {
  63  |             await this.subjectsInput.fill(subject);
  64  |             await this.page.getByText(subject).getByRole('listbox').click();
  65  |         }
  66  |     }
  67  |     async fillCurrentAddress(address:string) {
  68  |         await this.currentAddressInput.fill(address);
  69  |     }
  70  |     async selectGender(gender:string) {
  71  |         await this.genderInput.check();
  72  |     }
  73  |     async selectHobbies(hobbies:string[]) {
  74  |         for (const hobby of hobbies) {
  75  |             await this.hobbiesInput.check();
  76  |         }
  77  |     }
  78  |     async uploadPicture(picture:string) {
  79  |         await this.pictureInput.setInputFiles(picture);
  80  |     }
  81  |     async fillAddress(address:string) {
  82  |         await this.currentAddressInput.fill(address);
  83  |     }
  84  |     async selectState(state:string) {
  85  |         await this.stateInput.click();
  86  |         await this.page.getByText(state).click();
  87  |     }
  88  |     async selectCity(city:string) {
  89  |         await this.cityInput.click();
  90  |         await this.page.getByText(city).click();
  91  |     }
  92  |     async submitForm() {
  93  |         await this.submitButton.click();
  94  |     }
  95  | 
  96  |     async getFormSubmissionAllFields() {
  97  |         const firstAndLastName = await this.page.locator(studentName).textContent();
  98  |         const email = await this.page.locator(studentEmail).textContent();
  99  |         const gender = await this.page.locator(studentGender).textContent();
  100 |         const mobile = await this.page.locator(studentMobile).textContent();
  101 |         const dateOfBirth = await this.page.locator(studentDateOfBirth).textContent();
  102 |         const subjects = await this.page.locator(studentSubjects).textContent();
  103 |         const hobbies = await this.page.locator(studentHobbies).textContent();
  104 |         const picture = await this.page.locator(studentPicture).textContent();
  105 |         const address = await this.page.locator(studentAddress).textContent();
  106 |         const stateAndCity = await this.page.locator(studentStateAndCity).textContent();
  107 |         return { firstAndLastName, email, gender, mobile, dateOfBirth, subjects, hobbies, picture, address, stateAndCity };
  108 |     }
  109 |     async getFormSubmissionRequiredFields() {
  110 |         const firstAndLastName = await this.page.locator(studentName).textContent();
  111 |         const gender = await this.page.locator(studentGender).textContent();
  112 |         const mobile = await this.page.locator(studentMobile).textContent();
  113 |         return { firstAndLastName, gender, mobile };
  114 |     }
  115 | }
```