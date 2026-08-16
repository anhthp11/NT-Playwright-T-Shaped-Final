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

- Expected  - 4
+ Received  + 4

  Object {
    "address": "123 Main St, City, Country",
-   "dateOfBirth": "01 Jan 2000",
+   "dateOfBirth": "01 January,2000",
+   "email": "anh.truong@yopmail.com",
+   "firstAndLastName": "Anh Truong",
    "gender": "Male",
    "hobbies": "Sports",
    "mobile": "1234567890",
-   "picture": "C:\\Users\\anh.truonghongphuong\\Downloads\\New Bitmap image.bmp",
+   "picture": "New Bitmap image.bmp",
    "stateAndCity": "NCR Delhi",
-   "studentEmail": "anh.truong@yopmail.com",
-   "studentName": "Anh Truong",
    "subjects": "Maths",
  }
```

# Page snapshot

```yaml
- generic [ref=f214e1]:
  - generic [ref=f214e2]:
    - banner [ref=f214e3]:
      - link [ref=f214e4] [cursor=pointer]:
        - /url: https://demoqa.com
    - generic [ref=f214e8]:
      - generic [ref=f214e11]:
        - generic [ref=f214e12]: Elements
        - generic [ref=f214e24]:
          - generic [ref=f214e25] [cursor=pointer]: Forms
          - list [ref=f214e38]:
            - listitem [ref=f214e39] [cursor=pointer]:
              - link "Practice Form" [ref=f214e40]:
                - /url: /automation-practice-form
        - generic [ref=f214e43]: Alerts, Frame & Windows
        - generic [ref=f214e55]: Widgets
        - generic [ref=f214e68]: Interactions
        - generic [ref=f214e80]: Book Store Application
      - generic [ref=f214e92]:
        - generic [ref=f214e93]:
          - heading "Practice Form" [level=1] [ref=f214e94]
          - heading "Student Registration Form" [level=5] [ref=f214e95]
          - generic [ref=f214e96]:
            - generic [ref=f214e97]:
              - generic [ref=f214e98]: Name
              - textbox "First Name" [ref=f214e101]: Anh
              - textbox "Last Name" [ref=f214e103]: Truong
            - generic [ref=f214e104]:
              - generic [ref=f214e105]: Email
              - textbox "name@example.com" [ref=f214e108]: anh.truong@yopmail.com
            - generic [ref=f214e109]:
              - generic [ref=f214e110]: Gender
              - generic [ref=f214e111]:
                - generic [ref=f214e112]:
                  - radio "Male" [checked] [ref=f214e113]
                  - generic [ref=f214e114]: Male
                - generic [ref=f214e115]:
                  - radio "Female" [ref=f214e116]
                  - generic [ref=f214e117]: Female
                - generic [ref=f214e118]:
                  - radio "Other" [ref=f214e119]
                  - generic [ref=f214e120]: Other
            - generic [ref=f214e121]:
              - generic [ref=f214e122]: Mobile(10 Digits)
              - textbox "Mobile Number" [ref=f214e125]: "1234567890"
            - generic [ref=f214e126]:
              - generic [ref=f214e127]: Date of Birth
              - textbox [ref=f214e132]: 01 Jan 2000
            - generic [ref=f214e133]:
              - generic [ref=f214e134]: Subjects
              - generic [ref=f214e137]:
                - log [ref=f214e139]
                - generic [ref=f214e141]:
                  - generic [ref=f214e142]:
                    - generic [ref=f214e143]: Maths
                    - button "Remove Maths" [ref=f214e144] [cursor=pointer]
                  - combobox [ref=f214e148]
            - generic [ref=f214e154]:
              - generic [ref=f214e155]: Hobbies
              - generic [ref=f214e157]:
                - generic [ref=f214e158]:
                  - checkbox "Sports" [checked] [ref=f214e159]
                  - generic [ref=f214e160]: Sports
                - generic [ref=f214e161]:
                  - checkbox "Reading" [ref=f214e162]
                  - generic [ref=f214e163]: Reading
                - generic [ref=f214e164]:
                  - checkbox "Music" [ref=f214e165]
                  - generic [ref=f214e166]: Music
            - generic [ref=f214e167]:
              - generic [ref=f214e168]: Picture
              - button "Choose File" [ref=f214e171] [cursor=pointer]
            - generic [ref=f214e172]:
              - generic [ref=f214e173]: Current Address
              - textbox "Current Address" [ref=f214e176]: 123 Main St, City, Country
            - generic [ref=f214e177]:
              - generic [ref=f214e178]: State and City
              - generic [ref=f214e181]:
                - log [ref=f214e183]
                - generic [ref=f214e185]:
                  - generic [ref=f214e186]: NCR
                  - combobox [ref=f214e188]
              - generic [ref=f214e195]:
                - log [ref=f214e197]
                - generic [ref=f214e199]:
                  - generic [ref=f214e200]: Delhi
                  - combobox [ref=f214e202]
            - button "Submit" [ref=f214e210] [cursor=pointer]
        - iframe [ref=f214e214]:
          
    - contentinfo [ref=f214e220]:
      - generic [ref=f214e221]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [active] [ref=f214e223]:
    - generic [ref=f214e224]:
      - generic [ref=f214e225]: Thanks for submitting the form
      - table [ref=f214e229]:
        - rowgroup [ref=f214e230]:
          - row [ref=f214e231]:
            - columnheader "Label" [ref=f214e232]
            - columnheader "Values" [ref=f214e233]
        - rowgroup [ref=f214e234]:
          - row [ref=f214e235]:
            - cell "Student Name" [ref=f214e236]
            - cell "Anh Truong" [ref=f214e237]
          - row [ref=f214e238]:
            - cell "Student Email" [ref=f214e239]
            - cell "anh.truong@yopmail.com" [ref=f214e240]
          - row [ref=f214e241]:
            - cell "Gender" [ref=f214e242]
            - cell "Male" [ref=f214e243]
          - row [ref=f214e244]:
            - cell "Mobile" [ref=f214e245]
            - cell "1234567890" [ref=f214e246]
          - row [ref=f214e247]:
            - cell "Date of Birth" [ref=f214e248]
            - cell "01 January,2000" [ref=f214e249]
          - row [ref=f214e250]:
            - cell "Subjects" [ref=f214e251]
            - cell "Maths" [ref=f214e252]
          - row [ref=f214e253]:
            - cell "Hobbies" [ref=f214e254]
            - cell "Sports" [ref=f214e255]
          - row [ref=f214e256]:
            - cell "Picture" [ref=f214e257]
            - cell "New Bitmap image.bmp" [ref=f214e258]
          - row [ref=f214e259]:
            - cell "Address" [ref=f214e260]
            - cell "123 Main St, City, Country" [ref=f214e261]
          - row [ref=f214e262]:
            - cell "State and City" [ref=f214e263]
            - cell "NCR Delhi" [ref=f214e264]
      - button "Close" [ref=f214e266] [cursor=pointer]
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
> 31 |     expect(submittedData).toEqual({
     |                           ^ Error: expect(received).toEqual(expected) // deep equality
  32 |         studentName: `${studentData.firstName} ${studentData.lastName}`,
  33 |         studentEmail: studentData.email,
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