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
- generic [ref=f231e1]:
  - generic [ref=f231e2]:
    - banner [ref=f231e3]:
      - link [ref=f231e4] [cursor=pointer]:
        - /url: https://demoqa.com
    - generic [ref=f231e8]:
      - generic [ref=f231e11]:
        - generic [ref=f231e12]: Elements
        - generic [ref=f231e24]:
          - generic [ref=f231e25] [cursor=pointer]: Forms
          - list [ref=f231e38]:
            - listitem [ref=f231e39] [cursor=pointer]:
              - link "Practice Form" [ref=f231e40]:
                - /url: /automation-practice-form
        - generic [ref=f231e43]: Alerts, Frame & Windows
        - generic [ref=f231e55]: Widgets
        - generic [ref=f231e68]: Interactions
        - generic [ref=f231e80]: Book Store Application
      - generic [ref=f231e93]:
        - heading "Practice Form" [level=1] [ref=f231e94]
        - heading "Student Registration Form" [level=5] [ref=f231e95]
        - generic [ref=f231e96]:
          - generic [ref=f231e97]:
            - generic [ref=f231e98]: Name
            - textbox "First Name" [ref=f231e101]: Anh
            - textbox "Last Name" [ref=f231e103]: Truong
          - generic [ref=f231e104]:
            - generic [ref=f231e105]: Email
            - textbox "name@example.com" [ref=f231e108]: anh.truong@yopmail.com
          - generic [ref=f231e109]:
            - generic [ref=f231e110]: Gender
            - generic [ref=f231e111]:
              - generic [ref=f231e112]:
                - radio "Male" [checked] [ref=f231e113]
                - generic [ref=f231e114]: Male
              - generic [ref=f231e115]:
                - radio "Female" [ref=f231e116]
                - generic [ref=f231e117]: Female
              - generic [ref=f231e118]:
                - radio "Other" [ref=f231e119]
                - generic [ref=f231e120]: Other
          - generic [ref=f231e121]:
            - generic [ref=f231e122]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=f231e125]: "1234567890"
          - generic [ref=f231e126]:
            - generic [ref=f231e127]: Date of Birth
            - textbox [ref=f231e132]: 01 Jan 2000
          - generic [ref=f231e133]:
            - generic [ref=f231e134]: Subjects
            - generic [ref=f231e137]:
              - log [ref=f231e139]
              - generic [ref=f231e141]:
                - generic [ref=f231e142]:
                  - generic [ref=f231e143]: Maths
                  - button "Remove Maths" [ref=f231e144] [cursor=pointer]
                - combobox [ref=f231e148]
          - generic [ref=f231e154]:
            - generic [ref=f231e155]: Hobbies
            - generic [ref=f231e157]:
              - generic [ref=f231e158]:
                - checkbox "Sports" [checked] [ref=f231e159]
                - generic [ref=f231e160]: Sports
              - generic [ref=f231e161]:
                - checkbox "Reading" [ref=f231e162]
                - generic [ref=f231e163]: Reading
              - generic [ref=f231e164]:
                - checkbox "Music" [ref=f231e165]
                - generic [ref=f231e166]: Music
          - generic [ref=f231e167]:
            - generic [ref=f231e168]: Picture
            - button "Choose File" [ref=f231e171] [cursor=pointer]
          - generic [ref=f231e172]:
            - generic [ref=f231e173]: Current Address
            - textbox "Current Address" [ref=f231e176]: 123 Main St, City, Country
          - generic [ref=f231e177]:
            - generic [ref=f231e178]: State and City
            - generic [ref=f231e181]:
              - log [ref=f231e183]
              - generic [ref=f231e185]:
                - generic [ref=f231e186]: NCR
                - combobox [ref=f231e188]
            - generic [ref=f231e195]:
              - log [ref=f231e197]
              - generic [ref=f231e199]:
                - generic [ref=f231e200]: Delhi
                - combobox [ref=f231e202]
          - button "Submit" [ref=f231e210] [cursor=pointer]
    - contentinfo [ref=f231e217]:
      - generic [ref=f231e218]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [active] [ref=f231e220]:
    - generic [ref=f231e221]:
      - generic [ref=f231e222]: Thanks for submitting the form
      - table [ref=f231e226]:
        - rowgroup [ref=f231e227]:
          - row [ref=f231e228]:
            - columnheader "Label" [ref=f231e229]
            - columnheader "Values" [ref=f231e230]
        - rowgroup [ref=f231e231]:
          - row [ref=f231e232]:
            - cell "Student Name" [ref=f231e233]
            - cell "Anh Truong" [ref=f231e234]
          - row [ref=f231e235]:
            - cell "Student Email" [ref=f231e236]
            - cell "anh.truong@yopmail.com" [ref=f231e237]
          - row [ref=f231e238]:
            - cell "Gender" [ref=f231e239]
            - cell "Male" [ref=f231e240]
          - row [ref=f231e241]:
            - cell "Mobile" [ref=f231e242]
            - cell "1234567890" [ref=f231e243]
          - row [ref=f231e244]:
            - cell "Date of Birth" [ref=f231e245]
            - cell "01 January,2000" [ref=f231e246]
          - row [ref=f231e247]:
            - cell "Subjects" [ref=f231e248]
            - cell "Maths" [ref=f231e249]
          - row [ref=f231e250]:
            - cell "Hobbies" [ref=f231e251]
            - cell "Sports" [ref=f231e252]
          - row [ref=f231e253]:
            - cell "Picture" [ref=f231e254]
            - cell "New Bitmap image.bmp" [ref=f231e255]
          - row [ref=f231e256]:
            - cell "Address" [ref=f231e257]
            - cell "123 Main St, City, Country" [ref=f231e258]
          - row [ref=f231e259]:
            - cell "State and City" [ref=f231e260]
            - cell "NCR Delhi" [ref=f231e261]
      - button "Close" [ref=f231e263] [cursor=pointer]
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
  32 |         firstAndLastName: `${studentData.firstName} ${studentData.lastName}`,
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