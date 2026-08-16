# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-register-student.spec.ts >> SCE1: Register a student with all fields filled
- Location: tests\test-register-student.spec.ts:12:1

# Error details

```
TypeError: received is not iterable
```

# Page snapshot

```yaml
- generic [ref=f246e1]:
  - generic [ref=f246e2]:
    - banner [ref=f246e3]:
      - link [ref=f246e4] [cursor=pointer]:
        - /url: https://demoqa.com
    - generic [ref=f246e8]:
      - generic [ref=f246e11]:
        - generic [ref=f246e12]: Elements
        - generic [ref=f246e24]:
          - generic [ref=f246e25] [cursor=pointer]: Forms
          - list [ref=f246e38]:
            - listitem [ref=f246e39] [cursor=pointer]:
              - link "Practice Form" [ref=f246e40]:
                - /url: /automation-practice-form
        - generic [ref=f246e43]: Alerts, Frame & Windows
        - generic [ref=f246e55]: Widgets
        - generic [ref=f246e68]: Interactions
        - generic [ref=f246e80]: Book Store Application
      - generic [ref=f246e93]:
        - heading "Practice Form" [level=1] [ref=f246e94]
        - heading "Student Registration Form" [level=5] [ref=f246e95]
        - generic [ref=f246e96]:
          - generic [ref=f246e97]:
            - generic [ref=f246e98]: Name
            - textbox "First Name" [ref=f246e101]: Anh
            - textbox "Last Name" [ref=f246e103]: Truong
          - generic [ref=f246e104]:
            - generic [ref=f246e105]: Email
            - textbox "name@example.com" [ref=f246e108]: anh.truong@yopmail.com
          - generic [ref=f246e109]:
            - generic [ref=f246e110]: Gender
            - generic [ref=f246e111]:
              - generic [ref=f246e112]:
                - radio "Male" [checked] [ref=f246e113]
                - generic [ref=f246e114]: Male
              - generic [ref=f246e115]:
                - radio "Female" [ref=f246e116]
                - generic [ref=f246e117]: Female
              - generic [ref=f246e118]:
                - radio "Other" [ref=f246e119]
                - generic [ref=f246e120]: Other
          - generic [ref=f246e121]:
            - generic [ref=f246e122]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=f246e125]: "1234567890"
          - generic [ref=f246e126]:
            - generic [ref=f246e127]: Date of Birth
            - textbox [ref=f246e132]: 01 Jan 2000
          - generic [ref=f246e133]:
            - generic [ref=f246e134]: Subjects
            - generic [ref=f246e137]:
              - log [ref=f246e139]
              - generic [ref=f246e141]:
                - generic [ref=f246e142]:
                  - generic [ref=f246e143]: Maths
                  - button "Remove Maths" [ref=f246e144] [cursor=pointer]
                - combobox [ref=f246e148]
          - generic [ref=f246e154]:
            - generic [ref=f246e155]: Hobbies
            - generic [ref=f246e157]:
              - generic [ref=f246e158]:
                - checkbox "Sports" [checked] [ref=f246e159]
                - generic [ref=f246e160]: Sports
              - generic [ref=f246e161]:
                - checkbox "Reading" [ref=f246e162]
                - generic [ref=f246e163]: Reading
              - generic [ref=f246e164]:
                - checkbox "Music" [ref=f246e165]
                - generic [ref=f246e166]: Music
          - generic [ref=f246e167]:
            - generic [ref=f246e168]: Picture
            - button "Choose File" [ref=f246e171] [cursor=pointer]
          - generic [ref=f246e172]:
            - generic [ref=f246e173]: Current Address
            - textbox "Current Address" [ref=f246e176]: 123 Main St, City, Country
          - generic [ref=f246e177]:
            - generic [ref=f246e178]: State and City
            - generic [ref=f246e181]:
              - log [ref=f246e183]
              - generic [ref=f246e185]:
                - generic [ref=f246e186]: NCR
                - combobox [ref=f246e188]
            - generic [ref=f246e195]:
              - log [ref=f246e197]
              - generic [ref=f246e199]:
                - generic [ref=f246e200]: Delhi
                - combobox [ref=f246e202]
          - button "Submit" [ref=f246e210] [cursor=pointer]
    - contentinfo [ref=f246e217]:
      - generic [ref=f246e218]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [active] [ref=f246e220]:
    - generic [ref=f246e221]:
      - generic [ref=f246e222]: Thanks for submitting the form
      - table [ref=f246e226]:
        - rowgroup [ref=f246e227]:
          - row [ref=f246e228]:
            - columnheader "Label" [ref=f246e229]
            - columnheader "Values" [ref=f246e230]
        - rowgroup [ref=f246e231]:
          - row [ref=f246e232]:
            - cell "Student Name" [ref=f246e233]
            - cell "Anh Truong" [ref=f246e234]
          - row [ref=f246e235]:
            - cell "Student Email" [ref=f246e236]
            - cell "anh.truong@yopmail.com" [ref=f246e237]
          - row [ref=f246e238]:
            - cell "Gender" [ref=f246e239]
            - cell "Male" [ref=f246e240]
          - row [ref=f246e241]:
            - cell "Mobile" [ref=f246e242]
            - cell "1234567890" [ref=f246e243]
          - row [ref=f246e244]:
            - cell "Date of Birth" [ref=f246e245]
            - cell "01 January,2000" [ref=f246e246]
          - row [ref=f246e247]:
            - cell "Subjects" [ref=f246e248]
            - cell "Maths" [ref=f246e249]
          - row [ref=f246e250]:
            - cell "Hobbies" [ref=f246e251]
            - cell "Sports" [ref=f246e252]
          - row [ref=f246e253]:
            - cell "Picture" [ref=f246e254]
            - cell "New Bitmap image.bmp" [ref=f246e255]
          - row [ref=f246e256]:
            - cell "Address" [ref=f246e257]
            - cell "123 Main St, City, Country" [ref=f246e258]
          - row [ref=f246e259]:
            - cell "State and City" [ref=f246e260]
            - cell "NCR Delhi" [ref=f246e261]
      - button "Close" [ref=f246e263] [cursor=pointer]
```

# Test source

```ts
  1  | import { test as base,expect } from '@playwright/test';
  2  | import { StudentPage } from '../page_objects/student-page';
  3  | import { studentData } from '../test_data/student';
  4  | 
  5  | const test = base.extend<{ studentPage: StudentPage }>({
  6  |     studentPage: async ({ page }, use) => {
  7  |         const studentPage = new StudentPage(page);
  8  |         await use(studentPage);
  9  |     },
  10 | });
  11 | 
  12 | test('SCE1: Register a student with all fields filled', async ({ studentPage }) => {
  13 |     // Go to the Student Registration Form page
  14 |     await studentPage.goto();
  15 | 
  16 |     // Fill in the student registration form
  17 |     await studentPage.fillFirstName(studentData.firstName);
  18 |     await studentPage.fillLastName(studentData.lastName);
  19 |     await studentPage.fillEmail(studentData.email);
  20 |     await studentPage.selectGender(studentData.gender);
  21 |     await studentPage.fillMobile(studentData.mobile);
  22 |     await studentPage.fillDateOfBirth(studentData.dateOfBirth);
  23 |     await studentPage.selectSubjects(studentData.subjects);
  24 |     await studentPage.selectHobbies(studentData.hobbies);
  25 |     await studentPage.uploadPicture(studentData.picture);
  26 |     await studentPage.fillAddress(studentData.address);
  27 |     await studentPage.selectState(studentData.state);
  28 |     await studentPage.selectCity(studentData.city);
  29 |     await studentPage.submitForm();
  30 |     const submittedData = await studentPage.getFormSubmissionAllFields();
> 31 |     expect(submittedData).toContain({
     |                           ^ TypeError: received is not iterable
  32 |         name: `${studentData.firstName} ${studentData.lastName}`,
  33 |         email: studentData.email,
  34 |         gender: studentData.gender,
  35 |         mobile: studentData.mobile,
  36 |         dateOfBirth: studentData.dateOfBirth,
  37 |         subjects: studentData.subjects.join(', '),
  38 |         hobbies: studentData.hobbies.join(', '),
  39 |         picture: studentData.picture,
  40 |         address: studentData.address,
  41 |         stateAndCity: `${studentData.state} ${studentData.city}`,
  42 |     });
  43 | });
  44 | 
```