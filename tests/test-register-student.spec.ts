import { test as base,expect } from '@playwright/test';
import { StudentPage } from '../page_objects/student-page';
import { studentData } from '../test_data/student';

const test = base.extend<{ studentPage: StudentPage }>({
    studentPage: async ({ page }, use) => {
        const studentPage = new StudentPage(page);
        await use(studentPage);
    },
});

test('SCE1: Register a student with all fields filled', async ({ studentPage }) => {
    // Go to the Student Registration Form page
    await studentPage.goto();

    // Fill in the student registration form
    await studentPage.fillFirstName(studentData.firstName);
    await studentPage.fillLastName(studentData.lastName);
    await studentPage.fillEmail(studentData.email);
    await studentPage.selectGender(studentData.gender);
    await studentPage.fillMobile(studentData.mobile);
    await studentPage.fillDateOfBirth(studentData.dateOfBirth);
    await studentPage.selectSubjects(studentData.subjects);
    await studentPage.selectHobbies(studentData.hobbies);
    await studentPage.uploadPicture(studentData.picture);
    await studentPage.fillAddress(studentData.address);
    await studentPage.selectState(studentData.state);
    await studentPage.selectCity(studentData.city);
    await studentPage.submitForm();

    //assertion
    const submittedData = await studentPage.getFormSubmissionAllFields();
    expect(submittedData.name).toBe(`${studentData.firstName} ${studentData.lastName}`);
    expect(submittedData.email).toBe(studentData.email);
    expect(submittedData.gender).toBe(studentData.gender);
    expect(submittedData.mobile).toBe(studentData.mobile);
    expect(submittedData.subjects).toBe(studentData.subjects.join(', '));   
    expect(submittedData.hobbies).toBe(studentData.hobbies.join(', '));
    expect(submittedData.address).toBe(studentData.address);
    expect(submittedData.stateAndCity).toBe(`${studentData.state} ${studentData.city}`);
    expect(submittedData.picture).toContain(studentData.picture.split('\\').pop());
    expect(submittedData.dateOfBirth).toContain(studentData.dateOfBirth);
});
