# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-register-student.spec.ts >> SCE1: Register a student with all fields filled
- Location: tests\test-register-student.spec.ts:12:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('firstName')
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]: Forms
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
      - generic [ref=e43]: Alerts, Frame & Windows
      - generic [ref=e55]: Widgets
      - generic [ref=e68]: Interactions
      - generic [ref=e80]: Book Store Application
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]: Name
          - textbox "First Name" [ref=e101]
          - textbox "Last Name" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e105]: Email
          - textbox "name@example.com" [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e127]: Date of Birth
          - textbox [ref=e132]: 08 Aug 2026
        - generic [ref=e133]:
          - generic [ref=e134]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e147]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e160]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e165]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e170]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e177]:
              - generic [ref=e178]: Select State
              - combobox [ref=e180]
          - generic [ref=e186]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  14  |     readonly hobbiesInput: Locator
  15  |     readonly pictureInput: Locator;
  16  |     readonly currentAddressInput: Locator;
  17  |     readonly stateInput: Locator;
  18  |     readonly cityInput: Locator;
  19  |     readonly submitButton: Locator;
  20  | 
  21  |     constructor(page:Page) {
  22  |         this.page = page;
  23  |         this.firstNameInput = page.getByTestId("firstName");
  24  |         this.lastNameInput = page.getByTestId("lastName");
  25  |         this.emailInput = page.getByTestId("userEmail");
  26  |         this.genderInput = page.locator(genderMale);
  27  |         this.mobileInput = page.getByTestId("userNumber");
  28  |         this.dateOfBirthInput = page.getByTestId("dateOfBirthInput");
  29  |         this.subjectsInput = page.getByTestId("subjectsContainer");
  30  |         this.hobbiesInput = page.locator(hobbiesSports);
  31  |         this.pictureInput = page.getByTestId("uploadPicture");
  32  |         this.currentAddressInput = page.getByTestId("currentAddress");
  33  |         this.stateInput = page.getByTestId("state");
  34  |         this.cityInput = page.getByTestId("city");
  35  |         this.submitButton = page.getByTestId("submit");
  36  |     }
  37  |     async goto() {
  38  |         await this.page.goto(baseUrl + '/automation-practice-form');
  39  |     }
  40  |     async fillFirstName(firstName:string) {
> 41  |         await this.firstNameInput.fill(firstName);
      |                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  42  |     }
  43  |     async fillLastName(lastName:string) {
  44  |         await this.lastNameInput.fill(lastName);
  45  |     }
  46  |     async fillEmail(email:string) {
  47  |         await this.emailInput.fill(email);
  48  |     }
  49  |     async fillMobile(mobile:string) {
  50  |         await this.mobileInput.fill(mobile);
  51  |     }
  52  |     async fillDateOfBirth(dateOfBirth:string) {
  53  |         await this.dateOfBirthInput.fill(dateOfBirth);
  54  |     }
  55  |     async selectSubjects(subjects:string[]) {
  56  |         for (const subject of subjects) {
  57  |             await this.subjectsInput.fill(subject);
  58  |             await this.page.getByText(subject).click();
  59  |         }
  60  |     }
  61  |     async fillCurrentAddress(address:string) {
  62  |         await this.currentAddressInput.fill(address);
  63  |     }
  64  |     async selectGender(gender:string) {
  65  |         await this.page.getByLabel(gender).check();
  66  |     }
  67  |     async selectHobbies(hobbies:string[]) {
  68  |         for (const hobby of hobbies) {
  69  |             await this.page.getByLabel(hobby).check();
  70  |         }
  71  |     }
  72  |     async uploadPicture(picture:string) {
  73  |         await this.pictureInput.setInputFiles(picture);
  74  |     }
  75  |     async fillAddress(address:string) {
  76  |         await this.currentAddressInput.fill(address);
  77  |     }
  78  |     async selectState(state:string) {
  79  |         await this.stateInput.click();
  80  |         await this.page.getByText(state).click();
  81  |     }
  82  |     async selectCity(city:string) {
  83  |         await this.cityInput.click();
  84  |         await this.page.getByText(city).click();
  85  |     }
  86  |     async submitForm() {
  87  |         await this.submitButton.click();
  88  |     }
  89  | 
  90  |     async getFormSubmissionAllFields() {
  91  |         const firstAndLastName = await this.page.locator(studentName).textContent();
  92  |         const email = await this.page.locator(studentEmail).textContent();
  93  |         const gender = await this.page.locator(studentGender).textContent();
  94  |         const mobile = await this.page.locator(studentMobile).textContent();
  95  |         const dateOfBirth = await this.page.locator(studentDateOfBirth).textContent();
  96  |         const subjects = await this.page.locator(studentSubjects).textContent();
  97  |         const hobbies = await this.page.locator(studentHobbies).textContent();
  98  |         const picture = await this.page.locator(studentPicture).textContent();
  99  |         const address = await this.page.locator(studentAddress).textContent();
  100 |         const stateAndCity = await this.page.locator(studentStateAndCity).textContent();
  101 |         return { firstAndLastName, email, gender, mobile, dateOfBirth, subjects, hobbies, picture, address, stateAndCity };
  102 |     }
  103 |     async getFormSubmissionRequiredFields() {
  104 |         const firstAndLastName = await this.page.locator(studentName).textContent();
  105 |         const gender = await this.page.locator(studentGender).textContent();
  106 |         const mobile = await this.page.locator(studentMobile).textContent();
  107 |         return { firstAndLastName, gender, mobile };
  108 |     }
  109 | }
```