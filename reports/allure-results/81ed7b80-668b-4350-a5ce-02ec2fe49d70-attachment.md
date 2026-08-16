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
  - waiting for getByText('Maths').getByRole('listbox')
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f106e2]:
  - banner [ref=f106e3]:
    - link [ref=f106e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=f106e8]:
    - generic [ref=f106e11]:
      - generic [ref=f106e12]: Elements
      - generic [ref=f106e24]:
        - generic [ref=f106e25] [cursor=pointer]: Forms
        - list [ref=f106e38]:
          - listitem [ref=f106e39] [cursor=pointer]:
            - link "Practice Form" [ref=f106e40]:
              - /url: /automation-practice-form
      - generic [ref=f106e43]: Alerts, Frame & Windows
      - generic [ref=f106e55]: Widgets
      - generic [ref=f106e68]: Interactions
      - generic [ref=f106e80]: Book Store Application
    - generic [ref=f106e93]:
      - heading "Practice Form" [level=1] [ref=f106e94]
      - heading "Student Registration Form" [level=5] [ref=f106e95]
      - generic [ref=f106e96]:
        - generic [ref=f106e97]:
          - generic [ref=f106e98]: Name
          - textbox "First Name" [ref=f106e101]: Anh
          - textbox "Last Name" [ref=f106e103]: Truong
        - generic [ref=f106e104]:
          - generic [ref=f106e105]: Email
          - textbox "name@example.com" [ref=f106e108]: anh.truong@yopmail.com
        - generic [ref=f106e109]:
          - generic [ref=f106e110]: Gender
          - generic [ref=f106e111]:
            - generic [ref=f106e112]:
              - radio "Male" [checked] [ref=f106e113]
              - generic [ref=f106e114]: Male
            - generic [ref=f106e115]:
              - radio "Female" [ref=f106e116]
              - generic [ref=f106e117]: Female
            - generic [ref=f106e118]:
              - radio "Other" [ref=f106e119]
              - generic [ref=f106e120]: Other
        - generic [ref=f106e121]:
          - generic [ref=f106e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=f106e125]: "1234567890"
        - generic [ref=f106e126]:
          - generic [ref=f106e127]: Date of Birth
          - generic [ref=f106e129]:
            - textbox [ref=f106e132]: 01 Jan 2000
            - dialog "Choose Date" [ref=f106e136]:
              - alert [ref=f106e137]: January 2000
              - button "Previous Month" [ref=f106e138] [cursor=pointer]
              - button "Next Month" [ref=f106e139] [cursor=pointer]
              - generic [ref=f106e140]:
                - generic [ref=f106e141]:
                  - heading "January 2000" [level=2] [ref=f106e142]
                  - generic [ref=f106e143]:
                    - combobox [ref=f106e145]:
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
                    - combobox [ref=f106e147]:
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
                - table [ref=f106e148]:
                  - rowgroup [ref=f106e149]:
                    - row [ref=f106e150]:
                      - columnheader "Sunday" [ref=f106e151]: Su
                      - columnheader "Monday" [ref=f106e153]: Mo
                      - columnheader "Tuesday" [ref=f106e155]: Tu
                      - columnheader "Wednesday" [ref=f106e157]: We
                      - columnheader "Thursday" [ref=f106e159]: Th
                      - columnheader "Friday" [ref=f106e161]: Fr
                      - columnheader "Saturday" [ref=f106e163]: Sa
                  - rowgroup "Month January, 2000" [ref=f106e165]:
                    - row [ref=f106e166]:
                      - gridcell "Choose Sunday, December 26th, 1999" [ref=f106e167] [cursor=pointer]: "26"
                      - gridcell "Choose Monday, December 27th, 1999" [ref=f106e168] [cursor=pointer]: "27"
                      - gridcell "Choose Tuesday, December 28th, 1999" [ref=f106e169] [cursor=pointer]: "28"
                      - gridcell "Choose Wednesday, December 29th, 1999" [ref=f106e170] [cursor=pointer]: "29"
                      - gridcell "Choose Thursday, December 30th, 1999" [ref=f106e171] [cursor=pointer]: "30"
                      - gridcell "Choose Friday, December 31st, 1999" [ref=f106e172] [cursor=pointer]: "31"
                      - gridcell "Choose Saturday, January 1st, 2000" [selected] [ref=f106e173] [cursor=pointer]: "1"
                    - row [ref=f106e174]:
                      - gridcell "Choose Sunday, January 2nd, 2000" [ref=f106e175] [cursor=pointer]: "2"
                      - gridcell "Choose Monday, January 3rd, 2000" [ref=f106e176] [cursor=pointer]: "3"
                      - gridcell "Choose Tuesday, January 4th, 2000" [ref=f106e177] [cursor=pointer]: "4"
                      - gridcell "Choose Wednesday, January 5th, 2000" [ref=f106e178] [cursor=pointer]: "5"
                      - gridcell "Choose Thursday, January 6th, 2000" [ref=f106e179] [cursor=pointer]: "6"
                      - gridcell "Choose Friday, January 7th, 2000" [ref=f106e180] [cursor=pointer]: "7"
                      - gridcell "Choose Saturday, January 8th, 2000" [ref=f106e181] [cursor=pointer]: "8"
                    - row [ref=f106e182]:
                      - gridcell "Choose Sunday, January 9th, 2000" [ref=f106e183] [cursor=pointer]: "9"
                      - gridcell "Choose Monday, January 10th, 2000" [ref=f106e184] [cursor=pointer]: "10"
                      - gridcell "Choose Tuesday, January 11th, 2000" [ref=f106e185] [cursor=pointer]: "11"
                      - gridcell "Choose Wednesday, January 12th, 2000" [ref=f106e186] [cursor=pointer]: "12"
                      - gridcell "Choose Thursday, January 13th, 2000" [ref=f106e187] [cursor=pointer]: "13"
                      - gridcell "Choose Friday, January 14th, 2000" [ref=f106e188] [cursor=pointer]: "14"
                      - gridcell "Choose Saturday, January 15th, 2000" [ref=f106e189] [cursor=pointer]: "15"
                    - row [ref=f106e190]:
                      - gridcell "Choose Sunday, January 16th, 2000" [ref=f106e191] [cursor=pointer]: "16"
                      - gridcell "Choose Monday, January 17th, 2000" [ref=f106e192] [cursor=pointer]: "17"
                      - gridcell "Choose Tuesday, January 18th, 2000" [ref=f106e193] [cursor=pointer]: "18"
                      - gridcell "Choose Wednesday, January 19th, 2000" [ref=f106e194] [cursor=pointer]: "19"
                      - gridcell "Choose Thursday, January 20th, 2000" [ref=f106e195] [cursor=pointer]: "20"
                      - gridcell "Choose Friday, January 21st, 2000" [ref=f106e196] [cursor=pointer]: "21"
                      - gridcell "Choose Saturday, January 22nd, 2000" [ref=f106e197] [cursor=pointer]: "22"
                    - row [ref=f106e198]:
                      - gridcell "Choose Sunday, January 23rd, 2000" [ref=f106e199] [cursor=pointer]: "23"
                      - gridcell "Choose Monday, January 24th, 2000" [ref=f106e200] [cursor=pointer]: "24"
                      - gridcell "Choose Tuesday, January 25th, 2000" [ref=f106e201] [cursor=pointer]: "25"
                      - gridcell "Choose Wednesday, January 26th, 2000" [ref=f106e202] [cursor=pointer]: "26"
                      - gridcell "Choose Thursday, January 27th, 2000" [ref=f106e203] [cursor=pointer]: "27"
                      - gridcell "Choose Friday, January 28th, 2000" [ref=f106e204] [cursor=pointer]: "28"
                      - gridcell "Choose Saturday, January 29th, 2000" [ref=f106e205] [cursor=pointer]: "29"
                    - row [ref=f106e206]:
                      - gridcell "Choose Sunday, January 30th, 2000" [ref=f106e207] [cursor=pointer]: "30"
                      - gridcell "Choose Monday, January 31st, 2000" [ref=f106e208] [cursor=pointer]: "31"
                      - gridcell "Choose Tuesday, February 1st, 2000" [ref=f106e209] [cursor=pointer]: "1"
                      - gridcell "Choose Wednesday, February 2nd, 2000" [ref=f106e210] [cursor=pointer]: "2"
                      - gridcell "Choose Thursday, February 3rd, 2000" [ref=f106e211] [cursor=pointer]: "3"
                      - gridcell "Choose Friday, February 4th, 2000" [ref=f106e212] [cursor=pointer]: "4"
                      - gridcell "Choose Saturday, February 5th, 2000" [ref=f106e213] [cursor=pointer]: "5"
                    - row [ref=f106e214]:
                      - gridcell "Choose Sunday, February 6th, 2000" [ref=f106e215] [cursor=pointer]: "6"
                      - gridcell "Choose Monday, February 7th, 2000" [ref=f106e216] [cursor=pointer]: "7"
                      - gridcell "Choose Tuesday, February 8th, 2000" [ref=f106e217] [cursor=pointer]: "8"
                      - gridcell "Choose Wednesday, February 9th, 2000" [ref=f106e218] [cursor=pointer]: "9"
                      - gridcell "Choose Thursday, February 10th, 2000" [ref=f106e219] [cursor=pointer]: "10"
                      - gridcell "Choose Friday, February 11th, 2000" [ref=f106e220] [cursor=pointer]: "11"
                      - gridcell "Choose Saturday, February 12th, 2000" [ref=f106e221] [cursor=pointer]: "12"
        - generic [ref=f106e222]:
          - generic [ref=f106e223]: Subjects
          - generic [ref=f106e226]:
            - log [ref=f106e228]: 1 result available for search term Maths.Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.
            - combobox [expanded] [active] [ref=f106e232]: Maths
            - listbox [ref=f106e236]:
              - option "Maths" [ref=f106e237]
        - generic [ref=f106e238]:
          - generic [ref=f106e239]: Hobbies
          - generic [ref=f106e241]:
            - generic [ref=f106e242]:
              - checkbox "Sports" [ref=f106e243]
              - generic [ref=f106e244]: Sports
            - generic [ref=f106e245]:
              - checkbox "Reading" [ref=f106e246]
              - generic [ref=f106e247]: Reading
            - generic [ref=f106e248]:
              - checkbox "Music" [ref=f106e249]
              - generic [ref=f106e250]: Music
        - generic [ref=f106e251]:
          - generic [ref=f106e252]: Picture
          - button "Choose File" [ref=f106e255] [cursor=pointer]
        - generic [ref=f106e256]:
          - generic [ref=f106e257]: Current Address
          - textbox "Current Address" [ref=f106e260]
        - generic [ref=f106e261]:
          - generic [ref=f106e262]: State and City
          - generic [ref=f106e265]:
            - log [ref=f106e267]
            - generic [ref=f106e269]:
              - generic [ref=f106e270]: Select State
              - combobox [ref=f106e272]
          - generic [ref=f106e278]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=f106e281] [cursor=pointer]
    - iframe [ref=f106e290]:
      - link [ref=f113e5] [cursor=pointer]:
        - /url: https://adclick.g.doubleclick.net/aclk?sa=L&ai=CDnSewEp2aqzPBv-i4vEPmI2a4Q3Gp9zvXL3ShYmvC8CNtwEQASDG-9Z5YMG1-g3IAQmpAhM82tnMwIQ-4AIAqAMByAMCqgSBAk_QFf2hgMqQ0eOOaGU9A-H14QGojrbiOK_F06BMmte3Mrf9aI8cWCQuKs28RuP7Dh4RR4plK0grT66_C_jj5duboGE-1CrITbVps9UfoXtrwbhsnLhCI25RDb6cJnXlgmqO8-V9vT1GA87nlgbBL_JPjJlySFbiLNPcWoOU2e9kdc9GHXidsO32YKtC_CtlwJOZ97_2L75CGv3YCJyOrbBcqO6NY4zMsSoGacW0i9Z1UbtgrMRAALYpIzFU6SYZ8fUk0EqfKKyoq4F4iF9Vfi5E3r6LL0BWZPxBNCfin3VGxLk-aNMxQA-tsIGT0uSHsRpGG6LCdywoX2HNsbeQcGvl4AQBgAaPq5_Ej66e8uUBoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgH_uixAqgHrb6xAqgHv9OxAtgHANIIMAiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYjK_Q8LePlgNgAPIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MvoLAggBgAwBqg0CVk7iDRMIidvQ8LePlgMVf5E4CB2Yhibc6g0TCNqp0fC3j5YDFX-ROAgdmIYm3IgO____________AdAVAYAXAbIXEBgMKgo2MTY4NTc2NTA1UAGqGBcJ2kZOt_13xkASCjYxNjg1NzY1MDUYAQ&num=1&sig=AOD64_0bEbMwlomgxJ3imMv3V1K_9mZE3A&client=ca-pub-4573231550355221&adurl=https://asia.adform.net/C/?bn=88035747;C=1;crtbwp=anZKwAABp6wIOJF_ACaGmDS9932GboPTCwt8sw;crtbdata=Ecq51gJkRlqfU5wdIIZ1TEuMXKGvw2ibANUWRtog9hHx9zUcdktEfD_WQ7TNnvPSRfsqYSasic3od-Dlxhe0GF-iseLkXCayMVz0iMMcXMKii0fbP0DbjOl0WqVe2lDDu8lGCyF61D9fOzicY0zYhr7tKyWCZOnO4YtWRu92a-7T74aoOSLI8oEpOzD_yXnlFTtS-eBK7vo522vNtB8Sk0YH18vVONypry9NdbP5XykpHlpFAozcPNbRN1R49BIbeOD8v3uyPP_AhExRAbItUZ-84IpwwMLmQeEimShqzcc1;adfibeg=0;cdata=xyd1lIBeLyopVs55fxAnZbURUvVz1afhHQQ3uzPiB_F_jZLbLNtNiH8eiCOZQEdJLXdoEruwbEGvPCrSsv5_L3LLb10zwiQqiCFlIrevBulQBOKvCyJIM-nV8umbTYb9FJ291P-AmtnTDsX_6KcEMPGlrcMHL1yB9G3AKBThcpF6xxlzwerAv8BVYlvJQWOxdGJ9cFGVii6tNqISDrw97lgnHy3hnoIT0;;CREFURL=https%3a%2f%2fdemoqa.com
  - contentinfo [ref=f106e291]:
    - generic [ref=f106e292]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  29  |         this.genderInput = page.locator(genderMale);
  30  |         this.mobileInput = page.getByTestId("userNumber");
  31  |         this.dateOfBirthInput = page.getByTestId("dateOfBirthInput");
  32  |         this.subjectsInput = page.getByTestId("subjectsInput");
  33  |         //this.subjectsDropdownValue = page.locator(subjectsValue);
  34  |         this.hobbiesInput = page.locator(hobbiesSports);
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
> 64  |             await this.page.getByText(subject).getByRole("listbox").click();
      |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
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