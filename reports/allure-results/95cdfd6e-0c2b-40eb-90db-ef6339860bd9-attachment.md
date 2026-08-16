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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[text()="Maths"]/preceding-sibling::div[@role="listbox"]')
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f183e2]:
  - banner [ref=f183e3]:
    - link [ref=f183e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=f183e8]:
    - generic [ref=f183e11]:
      - generic [ref=f183e12]: Elements
      - generic [ref=f183e24]:
        - generic [ref=f183e25] [cursor=pointer]: Forms
        - list [ref=f183e38]:
          - listitem [ref=f183e39] [cursor=pointer]:
            - link "Practice Form" [ref=f183e40]:
              - /url: /automation-practice-form
      - generic [ref=f183e43]: Alerts, Frame & Windows
      - generic [ref=f183e55]: Widgets
      - generic [ref=f183e68]: Interactions
      - generic [ref=f183e80]: Book Store Application
    - generic [ref=f183e93]:
      - heading "Practice Form" [level=1] [ref=f183e94]
      - heading "Student Registration Form" [level=5] [ref=f183e95]
      - generic [ref=f183e96]:
        - generic [ref=f183e97]:
          - generic [ref=f183e98]: Name
          - textbox "First Name" [ref=f183e101]: Anh
          - textbox "Last Name" [ref=f183e103]: Truong
        - generic [ref=f183e104]:
          - generic [ref=f183e105]: Email
          - textbox "name@example.com" [ref=f183e108]: anh.truong@yopmail.com
        - generic [ref=f183e109]:
          - generic [ref=f183e110]: Gender
          - generic [ref=f183e111]:
            - generic [ref=f183e112]:
              - radio "Male" [checked] [ref=f183e113]
              - generic [ref=f183e114]: Male
            - generic [ref=f183e115]:
              - radio "Female" [ref=f183e116]
              - generic [ref=f183e117]: Female
            - generic [ref=f183e118]:
              - radio "Other" [ref=f183e119]
              - generic [ref=f183e120]: Other
        - generic [ref=f183e121]:
          - generic [ref=f183e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=f183e125]: "1234567890"
        - generic [ref=f183e126]:
          - generic [ref=f183e127]: Date of Birth
          - generic [ref=f183e129]:
            - textbox [ref=f183e132]: 01 Jan 2000
            - dialog "Choose Date" [ref=f183e136]:
              - alert [ref=f183e137]: January 2000
              - button "Previous Month" [ref=f183e138] [cursor=pointer]
              - button "Next Month" [ref=f183e139] [cursor=pointer]
              - generic [ref=f183e140]:
                - generic [ref=f183e141]:
                  - heading "January 2000" [level=2] [ref=f183e142]
                  - generic [ref=f183e143]:
                    - combobox [ref=f183e145]:
                      - option "January" [selected]
                      - option "February"
                      - option "March"
                      - option "April"
                      - option "May"
                      - option "June"
                      - option "July"
                      - option "August"
                      - option "September"
                      - option "October"
                      - option "November"
                      - option "December"
                    - combobox [ref=f183e147]:
                      - option "1900"
                      - option "1901"
                      - option "1902"
                      - option "1903"
                      - option "1904"
                      - option "1905"
                      - option "1906"
                      - option "1907"
                      - option "1908"
                      - option "1909"
                      - option "1910"
                      - option "1911"
                      - option "1912"
                      - option "1913"
                      - option "1914"
                      - option "1915"
                      - option "1916"
                      - option "1917"
                      - option "1918"
                      - option "1919"
                      - option "1920"
                      - option "1921"
                      - option "1922"
                      - option "1923"
                      - option "1924"
                      - option "1925"
                      - option "1926"
                      - option "1927"
                      - option "1928"
                      - option "1929"
                      - option "1930"
                      - option "1931"
                      - option "1932"
                      - option "1933"
                      - option "1934"
                      - option "1935"
                      - option "1936"
                      - option "1937"
                      - option "1938"
                      - option "1939"
                      - option "1940"
                      - option "1941"
                      - option "1942"
                      - option "1943"
                      - option "1944"
                      - option "1945"
                      - option "1946"
                      - option "1947"
                      - option "1948"
                      - option "1949"
                      - option "1950"
                      - option "1951"
                      - option "1952"
                      - option "1953"
                      - option "1954"
                      - option "1955"
                      - option "1956"
                      - option "1957"
                      - option "1958"
                      - option "1959"
                      - option "1960"
                      - option "1961"
                      - option "1962"
                      - option "1963"
                      - option "1964"
                      - option "1965"
                      - option "1966"
                      - option "1967"
                      - option "1968"
                      - option "1969"
                      - option "1970"
                      - option "1971"
                      - option "1972"
                      - option "1973"
                      - option "1974"
                      - option "1975"
                      - option "1976"
                      - option "1977"
                      - option "1978"
                      - option "1979"
                      - option "1980"
                      - option "1981"
                      - option "1982"
                      - option "1983"
                      - option "1984"
                      - option "1985"
                      - option "1986"
                      - option "1987"
                      - option "1988"
                      - option "1989"
                      - option "1990"
                      - option "1991"
                      - option "1992"
                      - option "1993"
                      - option "1994"
                      - option "1995"
                      - option "1996"
                      - option "1997"
                      - option "1998"
                      - option "1999"
                      - option "2000" [selected]
                      - option "2001"
                      - option "2002"
                      - option "2003"
                      - option "2004"
                      - option "2005"
                      - option "2006"
                      - option "2007"
                      - option "2008"
                      - option "2009"
                      - option "2010"
                      - option "2011"
                      - option "2012"
                      - option "2013"
                      - option "2014"
                      - option "2015"
                      - option "2016"
                      - option "2017"
                      - option "2018"
                      - option "2019"
                      - option "2020"
                      - option "2021"
                      - option "2022"
                      - option "2023"
                      - option "2024"
                      - option "2025"
                      - option "2026"
                      - option "2027"
                      - option "2028"
                      - option "2029"
                      - option "2030"
                      - option "2031"
                      - option "2032"
                      - option "2033"
                      - option "2034"
                      - option "2035"
                      - option "2036"
                      - option "2037"
                      - option "2038"
                      - option "2039"
                      - option "2040"
                      - option "2041"
                      - option "2042"
                      - option "2043"
                      - option "2044"
                      - option "2045"
                      - option "2046"
                      - option "2047"
                      - option "2048"
                      - option "2049"
                      - option "2050"
                      - option "2051"
                      - option "2052"
                      - option "2053"
                      - option "2054"
                      - option "2055"
                      - option "2056"
                      - option "2057"
                      - option "2058"
                      - option "2059"
                      - option "2060"
                      - option "2061"
                      - option "2062"
                      - option "2063"
                      - option "2064"
                      - option "2065"
                      - option "2066"
                      - option "2067"
                      - option "2068"
                      - option "2069"
                      - option "2070"
                      - option "2071"
                      - option "2072"
                      - option "2073"
                      - option "2074"
                      - option "2075"
                      - option "2076"
                      - option "2077"
                      - option "2078"
                      - option "2079"
                      - option "2080"
                      - option "2081"
                      - option "2082"
                      - option "2083"
                      - option "2084"
                      - option "2085"
                      - option "2086"
                      - option "2087"
                      - option "2088"
                      - option "2089"
                      - option "2090"
                      - option "2091"
                      - option "2092"
                      - option "2093"
                      - option "2094"
                      - option "2095"
                      - option "2096"
                      - option "2097"
                      - option "2098"
                      - option "2099"
                      - option "2100"
                - table [ref=f183e148]:
                  - rowgroup [ref=f183e149]:
                    - row [ref=f183e150]:
                      - columnheader "Sunday" [ref=f183e151]: Su
                      - columnheader "Monday" [ref=f183e153]: Mo
                      - columnheader "Tuesday" [ref=f183e155]: Tu
                      - columnheader "Wednesday" [ref=f183e157]: We
                      - columnheader "Thursday" [ref=f183e159]: Th
                      - columnheader "Friday" [ref=f183e161]: Fr
                      - columnheader "Saturday" [ref=f183e163]: Sa
                  - rowgroup "Month January, 2000" [ref=f183e165]:
                    - row [ref=f183e166]:
                      - gridcell "Choose Sunday, December 26th, 1999" [ref=f183e167] [cursor=pointer]: "26"
                      - gridcell "Choose Monday, December 27th, 1999" [ref=f183e168] [cursor=pointer]: "27"
                      - gridcell "Choose Tuesday, December 28th, 1999" [ref=f183e169] [cursor=pointer]: "28"
                      - gridcell "Choose Wednesday, December 29th, 1999" [ref=f183e170] [cursor=pointer]: "29"
                      - gridcell "Choose Thursday, December 30th, 1999" [ref=f183e171] [cursor=pointer]: "30"
                      - gridcell "Choose Friday, December 31st, 1999" [ref=f183e172] [cursor=pointer]: "31"
                      - gridcell "Choose Saturday, January 1st, 2000" [selected] [ref=f183e173] [cursor=pointer]: "1"
                    - row [ref=f183e174]:
                      - gridcell "Choose Sunday, January 2nd, 2000" [ref=f183e175] [cursor=pointer]: "2"
                      - gridcell "Choose Monday, January 3rd, 2000" [ref=f183e176] [cursor=pointer]: "3"
                      - gridcell "Choose Tuesday, January 4th, 2000" [ref=f183e177] [cursor=pointer]: "4"
                      - gridcell "Choose Wednesday, January 5th, 2000" [ref=f183e178] [cursor=pointer]: "5"
                      - gridcell "Choose Thursday, January 6th, 2000" [ref=f183e179] [cursor=pointer]: "6"
                      - gridcell "Choose Friday, January 7th, 2000" [ref=f183e180] [cursor=pointer]: "7"
                      - gridcell "Choose Saturday, January 8th, 2000" [ref=f183e181] [cursor=pointer]: "8"
                    - row [ref=f183e182]:
                      - gridcell "Choose Sunday, January 9th, 2000" [ref=f183e183] [cursor=pointer]: "9"
                      - gridcell "Choose Monday, January 10th, 2000" [ref=f183e184] [cursor=pointer]: "10"
                      - gridcell "Choose Tuesday, January 11th, 2000" [ref=f183e185] [cursor=pointer]: "11"
                      - gridcell "Choose Wednesday, January 12th, 2000" [ref=f183e186] [cursor=pointer]: "12"
                      - gridcell "Choose Thursday, January 13th, 2000" [ref=f183e187] [cursor=pointer]: "13"
                      - gridcell "Choose Friday, January 14th, 2000" [ref=f183e188] [cursor=pointer]: "14"
                      - gridcell "Choose Saturday, January 15th, 2000" [ref=f183e189] [cursor=pointer]: "15"
                    - row [ref=f183e190]:
                      - gridcell "Choose Sunday, January 16th, 2000" [ref=f183e191] [cursor=pointer]: "16"
                      - gridcell "Choose Monday, January 17th, 2000" [ref=f183e192] [cursor=pointer]: "17"
                      - gridcell "Choose Tuesday, January 18th, 2000" [ref=f183e193] [cursor=pointer]: "18"
                      - gridcell "Choose Wednesday, January 19th, 2000" [ref=f183e194] [cursor=pointer]: "19"
                      - gridcell "Choose Thursday, January 20th, 2000" [ref=f183e195] [cursor=pointer]: "20"
                      - gridcell "Choose Friday, January 21st, 2000" [ref=f183e196] [cursor=pointer]: "21"
                      - gridcell "Choose Saturday, January 22nd, 2000" [ref=f183e197] [cursor=pointer]: "22"
                    - row [ref=f183e198]:
                      - gridcell "Choose Sunday, January 23rd, 2000" [ref=f183e199] [cursor=pointer]: "23"
                      - gridcell "Choose Monday, January 24th, 2000" [ref=f183e200] [cursor=pointer]: "24"
                      - gridcell "Choose Tuesday, January 25th, 2000" [ref=f183e201] [cursor=pointer]: "25"
                      - gridcell "Choose Wednesday, January 26th, 2000" [ref=f183e202] [cursor=pointer]: "26"
                      - gridcell "Choose Thursday, January 27th, 2000" [ref=f183e203] [cursor=pointer]: "27"
                      - gridcell "Choose Friday, January 28th, 2000" [ref=f183e204] [cursor=pointer]: "28"
                      - gridcell "Choose Saturday, January 29th, 2000" [ref=f183e205] [cursor=pointer]: "29"
                    - row [ref=f183e206]:
                      - gridcell "Choose Sunday, January 30th, 2000" [ref=f183e207] [cursor=pointer]: "30"
                      - gridcell "Choose Monday, January 31st, 2000" [ref=f183e208] [cursor=pointer]: "31"
                      - gridcell "Choose Tuesday, February 1st, 2000" [ref=f183e209] [cursor=pointer]: "1"
                      - gridcell "Choose Wednesday, February 2nd, 2000" [ref=f183e210] [cursor=pointer]: "2"
                      - gridcell "Choose Thursday, February 3rd, 2000" [ref=f183e211] [cursor=pointer]: "3"
                      - gridcell "Choose Friday, February 4th, 2000" [ref=f183e212] [cursor=pointer]: "4"
                      - gridcell "Choose Saturday, February 5th, 2000" [ref=f183e213] [cursor=pointer]: "5"
                    - row [ref=f183e214]:
                      - gridcell "Choose Sunday, February 6th, 2000" [ref=f183e215] [cursor=pointer]: "6"
                      - gridcell "Choose Monday, February 7th, 2000" [ref=f183e216] [cursor=pointer]: "7"
                      - gridcell "Choose Tuesday, February 8th, 2000" [ref=f183e217] [cursor=pointer]: "8"
                      - gridcell "Choose Wednesday, February 9th, 2000" [ref=f183e218] [cursor=pointer]: "9"
                      - gridcell "Choose Thursday, February 10th, 2000" [ref=f183e219] [cursor=pointer]: "10"
                      - gridcell "Choose Friday, February 11th, 2000" [ref=f183e220] [cursor=pointer]: "11"
                      - gridcell "Choose Saturday, February 12th, 2000" [ref=f183e221] [cursor=pointer]: "12"
        - generic [ref=f183e222]:
          - generic [ref=f183e223]: Subjects
          - generic [ref=f183e226]:
            - log [ref=f183e228]
            - combobox [ref=f183e232]
        - generic [ref=f183e235]:
          - generic [ref=f183e236]: Hobbies
          - generic [ref=f183e238]:
            - generic [ref=f183e239]:
              - checkbox "Sports" [ref=f183e240]
              - generic [ref=f183e241]: Sports
            - generic [ref=f183e242]:
              - checkbox "Reading" [ref=f183e243]
              - generic [ref=f183e244]: Reading
            - generic [ref=f183e245]:
              - checkbox "Music" [ref=f183e246]
              - generic [ref=f183e247]: Music
        - generic [ref=f183e248]:
          - generic [ref=f183e249]: Picture
          - button "Choose File" [ref=f183e252] [cursor=pointer]
        - generic [ref=f183e253]:
          - generic [ref=f183e254]: Current Address
          - textbox "Current Address" [ref=f183e257]
        - generic [ref=f183e258]:
          - generic [ref=f183e259]: State and City
          - generic [ref=f183e262]:
            - log [ref=f183e264]
            - generic [ref=f183e266]:
              - generic [ref=f183e267]: Select State
              - combobox [ref=f183e269]
          - generic [ref=f183e275]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=f183e278] [cursor=pointer]
  - contentinfo [ref=f183e285]:
    - generic [ref=f183e286]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
> 64  |             await this.page.locator(`//div[text()="${subject}"]/preceding-sibling::div[@role="listbox"]`).click();
      |                                                                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
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