# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-register-student.spec.ts >> SCE1: Register a student with all fields filled
- Location: tests\test-register-student.spec.ts:12:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 3
+ Received  + 3

  Object {
    "address": "123 Main St, City, Country",
-   "dateOfBirth": "01 Jan 2000",
+   "dateOfBirth": "01 January,2000",
    "email": "anh.truong@yopmail.com",
+   "firstAndLastName": "Anh Truong",
    "gender": "Male",
    "hobbies": "Sports",
    "mobile": "1234567890",
-   "name": "Anh Truong",
-   "picture": "C:\\Users\\anh.truonghongphuong\\Downloads\\New Bitmap image.bmp",
+   "picture": "New Bitmap image.bmp",
    "stateAndCity": "NCR Delhi",
    "subjects": "Maths",
  }
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - textbox "First Name" [ref=e101]: Anh
            - textbox "Last Name" [ref=e103]: Truong
          - generic [ref=e104]:
            - generic [ref=e105]: Email
            - textbox "name@example.com" [ref=e108]: anh.truong@yopmail.com
          - generic [ref=e109]:
            - generic [ref=e110]: Gender
            - generic [ref=e111]:
              - generic [ref=e112]:
                - radio "Male" [checked] [ref=e113]
                - generic [ref=e114]: Male
              - generic [ref=e115]:
                - radio "Female" [ref=e116]
                - generic [ref=e117]: Female
              - generic [ref=e118]:
                - radio "Other" [ref=e119]
                - generic [ref=e120]: Other
          - generic [ref=e121]:
            - generic [ref=e122]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=e125]: "1234567890"
          - generic [ref=e126]:
            - generic [ref=e127]: Date of Birth
            - textbox [ref=e132]: 01 Jan 2000
          - generic [ref=e133]:
            - generic [ref=e134]: Subjects
            - generic [ref=e137]:
              - log [ref=e139]
              - generic [ref=e141]:
                - generic [ref=e142]:
                  - generic [ref=e143]: Maths
                  - button "Remove Maths" [ref=e144] [cursor=pointer]
                - combobox [ref=e148]
          - generic [ref=e154]:
            - generic [ref=e155]: Hobbies
            - generic [ref=e157]:
              - generic [ref=e158]:
                - checkbox "Sports" [checked] [ref=e159]
                - generic [ref=e160]: Sports
              - generic [ref=e161]:
                - checkbox "Reading" [ref=e162]
                - generic [ref=e163]: Reading
              - generic [ref=e164]:
                - checkbox "Music" [ref=e165]
                - generic [ref=e166]: Music
          - generic [ref=e167]:
            - generic [ref=e168]: Picture
            - button "Choose File" [ref=e171] [cursor=pointer]
          - generic [ref=e172]:
            - generic [ref=e173]: Current Address
            - textbox "Current Address" [ref=e176]: 123 Main St, City, Country
          - generic [ref=e177]:
            - generic [ref=e178]: State and City
            - generic [ref=e181]:
              - log [ref=e183]
              - generic [ref=e185]:
                - generic [ref=e186]: NCR
                - combobox [ref=e188]
            - generic [ref=e195]:
              - log [ref=e197]
              - generic [ref=e199]:
                - generic [ref=e200]: Delhi
                - combobox [ref=e202]
          - button "Submit" [ref=e210] [cursor=pointer]
    - contentinfo [ref=e217]:
      - generic [ref=e218]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [active] [ref=e220]:
    - generic [ref=e221]:
      - generic [ref=e222]: Thanks for submitting the form
      - table [ref=e226]:
        - rowgroup [ref=e227]:
          - row [ref=e228]:
            - columnheader "Label" [ref=e229]
            - columnheader "Values" [ref=e230]
        - rowgroup [ref=e231]:
          - row [ref=e232]:
            - cell "Student Name" [ref=e233]
            - cell "Anh Truong" [ref=e234]
          - row [ref=e235]:
            - cell "Student Email" [ref=e236]
            - cell "anh.truong@yopmail.com" [ref=e237]
          - row [ref=e238]:
            - cell "Gender" [ref=e239]
            - cell "Male" [ref=e240]
          - row [ref=e241]:
            - cell "Mobile" [ref=e242]
            - cell "1234567890" [ref=e243]
          - row [ref=e244]:
            - cell "Date of Birth" [ref=e245]
            - cell "01 January,2000" [ref=e246]
          - row [ref=e247]:
            - cell "Subjects" [ref=e248]
            - cell "Maths" [ref=e249]
          - row [ref=e250]:
            - cell "Hobbies" [ref=e251]
            - cell "Sports" [ref=e252]
          - row [ref=e253]:
            - cell "Picture" [ref=e254]
            - cell "New Bitmap image.bmp" [ref=e255]
          - row [ref=e256]:
            - cell "Address" [ref=e257]
            - cell "123 Main St, City, Country" [ref=e258]
          - row [ref=e259]:
            - cell "State and City" [ref=e260]
            - cell "NCR Delhi" [ref=e261]
      - button "Close" [ref=e263] [cursor=pointer]
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
> 31 |     expect(submittedData).toEqual ({
     |                           ^ Error: expect(received).toEqual(expected) // deep equality
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