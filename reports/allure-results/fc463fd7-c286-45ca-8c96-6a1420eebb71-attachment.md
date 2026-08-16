# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-register-student.spec.ts >> SCE1: Register a student with all fields filled
- Location: tests\test-register-student.spec.ts:12:1

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\anh.truonghongphuong\Documents\VSCode\Playwright\New Bitmap image.bmp'
```

# Page snapshot

```yaml
- generic [ref=f198e2]:
  - banner [ref=f198e3]:
    - link [ref=f198e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=f198e8]:
    - generic [ref=f198e11]:
      - generic [ref=f198e12]: Elements
      - generic [ref=f198e24]:
        - generic [ref=f198e25] [cursor=pointer]: Forms
        - list [ref=f198e38]:
          - listitem [ref=f198e39] [cursor=pointer]:
            - link "Practice Form" [ref=f198e40]:
              - /url: /automation-practice-form
      - generic [ref=f198e43]: Alerts, Frame & Windows
      - generic [ref=f198e55]: Widgets
      - generic [ref=f198e68]: Interactions
      - generic [ref=f198e80]: Book Store Application
    - generic [ref=f198e93]:
      - heading "Practice Form" [level=1] [ref=f198e94]
      - heading "Student Registration Form" [level=5] [ref=f198e95]
      - generic [ref=f198e96]:
        - generic [ref=f198e97]:
          - generic [ref=f198e98]: Name
          - textbox "First Name" [ref=f198e101]: Anh
          - textbox "Last Name" [ref=f198e103]: Truong
        - generic [ref=f198e104]:
          - generic [ref=f198e105]: Email
          - textbox "name@example.com" [ref=f198e108]: anh.truong@yopmail.com
        - generic [ref=f198e109]:
          - generic [ref=f198e110]: Gender
          - generic [ref=f198e111]:
            - generic [ref=f198e112]:
              - radio "Male" [checked] [ref=f198e113]
              - generic [ref=f198e114]: Male
            - generic [ref=f198e115]:
              - radio "Female" [ref=f198e116]
              - generic [ref=f198e117]: Female
            - generic [ref=f198e118]:
              - radio "Other" [ref=f198e119]
              - generic [ref=f198e120]: Other
        - generic [ref=f198e121]:
          - generic [ref=f198e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=f198e125]: "1234567890"
        - generic [ref=f198e126]:
          - generic [ref=f198e127]: Date of Birth
          - textbox [ref=f198e132]: 01 Jan 2000
        - generic [ref=f198e133]:
          - generic [ref=f198e134]: Subjects
          - generic [ref=f198e137]:
            - log [ref=f198e139]
            - generic [ref=f198e141]:
              - generic [ref=f198e142]:
                - generic [ref=f198e143]: Maths
                - button "Remove Maths" [ref=f198e144] [cursor=pointer]
              - combobox [ref=f198e148]
        - generic [ref=f198e154]:
          - generic [ref=f198e155]: Hobbies
          - generic [ref=f198e157]:
            - generic [ref=f198e158]:
              - checkbox "Sports" [checked] [active] [ref=f198e159]
              - generic [ref=f198e160]: Sports
            - generic [ref=f198e161]:
              - checkbox "Reading" [ref=f198e162]
              - generic [ref=f198e163]: Reading
            - generic [ref=f198e164]:
              - checkbox "Music" [ref=f198e165]
              - generic [ref=f198e166]: Music
        - generic [ref=f198e167]:
          - generic [ref=f198e168]: Picture
          - button "Choose File" [ref=f198e171] [cursor=pointer]
        - generic [ref=f198e172]:
          - generic [ref=f198e173]: Current Address
          - textbox "Current Address" [ref=f198e176]
        - generic [ref=f198e177]:
          - generic [ref=f198e178]: State and City
          - generic [ref=f198e181]:
            - log [ref=f198e183]
            - generic [ref=f198e185]:
              - generic [ref=f198e186]: Select State
              - combobox [ref=f198e188]
          - generic [ref=f198e194]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=f198e197] [cursor=pointer]
  - contentinfo [ref=f198e204]:
    - generic [ref=f198e205]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | import { baseUrl } from '../env/url';
  3   | import { gender, hobbies, studentAddress, studentDateOfBirth, studentEmail, studentGender, studentHobbies, studentMobile, studentName, studentPicture, studentStateAndCity, studentSubjects } from "../env/locator";
  4   | 
  5   | export class StudentPage {
  6   |     readonly page: Page;
  7   |     readonly firstNameInput: Locator;
  8   |     readonly lastNameInput: Locator;
  9   |     readonly emailInput: Locator;
  10  |     //readonly genderInput: Locator;
  11  |     readonly mobileInput: Locator;
  12  |     readonly dateOfBirthInput: Locator;
  13  |     readonly subjectsInput: Locator;
  14  |     //readonly subjectsDropdownValue: Locator;
  15  |     readonly hobbiesInput: Locator
  16  |     readonly pictureInput: Locator;
  17  |     readonly currentAddressInput: Locator;
  18  |     readonly stateInput: Locator;
  19  |     //readonly stateDropdownValue: Locator;
  20  |     readonly cityInput: Locator;
  21  |     //readonly cityDropdownValue: Locator;
  22  |     readonly submitButton: Locator;
  23  | 
  24  |     constructor(page:Page) {
  25  |         this.page = page;
  26  |         this.firstNameInput = page.getByTestId("firstName");
  27  |         this.lastNameInput = page.getByTestId("lastName");
  28  |         this.emailInput = page.getByTestId("userEmail");
  29  |         //this.genderInput = page.locator(gender);
  30  |         this.mobileInput = page.getByTestId("userNumber");
  31  |         this.dateOfBirthInput = page.getByTestId("dateOfBirthInput");
  32  |         this.subjectsInput = page.getByTestId("subjectsInput");
  33  |         //this.subjectsDropdownValue = page.locator(subjectsValue);
  34  |         this.hobbiesInput = page.locator(hobbies);
  35  |         this.pictureInput = page.getByTestId("uploadPicture");
  36  |         this.currentAddressInput = page.getByTestId("currentAddress");
  37  |         this.stateInput = page.getByTestId("state");
  38  |         //this.stateDropdownValue = page.locator(stateValue);
  39  |         this.cityInput = page.getByTestId("city");
  40  |         //this.cityDropdownValue = page.locator(cityValue);
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
  64  |             await this.page.locator(`//div[text()="${subject}"]`).click();
  65  |         }
  66  |     }
  67  |     async fillCurrentAddress(address:string) {
  68  |         await this.currentAddressInput.fill(address);
  69  |     }
  70  |     async selectGender(gender:string) {
  71  |         await this.page.locator(`//input[@value="${gender}" and @name="gender"]`).check();
  72  |    }
  73  |     async selectHobbies(hobbies:string[]) {
  74  |         for (const hobby of hobbies) {
  75  |             await this.page.locator(`//label[text()="${hobby}"]/preceding-sibling::input`).check();
  76  |         }
  77  |     }
  78  |     async uploadPicture(picture:string) {
> 79  |         await this.pictureInput.setInputFiles(picture);
      |         ^ Error: ENOENT: no such file or directory, stat 'C:\Users\anh.truonghongphuong\Documents\VSCode\Playwright\New Bitmap image.bmp'
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