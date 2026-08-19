This is a project to practice Automation testing using Playwright and Typescript.

Thanks for reviewing!

Project details:
- Programming language: Typescript
- Framework: Playwright
- Instructors: Mr. Tue, Mr. Duy, Mr. Tien, Mrs. Anh from NT
- Creator: Anh Truong

Project Structure
├── .github/
│   └── workflows/          # CI/CD workflows
├── core/
│   ├── api/                # API service classes
│   ├── fixtures/           # Custom Playwright fixtures
│   └── utils/              # Reusable utilities
├── env/                    # Environment and endpoint configuration
├── page_objects/           # Page Object classes
├── reports/                # Test reports
├── test_data/              # Test data
├── tests/                  # Test scenarios
├── playwright.config.ts    # Playwright configuration
└── package.json

Test Scenarios
SCE2: Add products to cart and verify cart contents and totals
SCE5: Checkout with valid receiver information
SCE6: Update user full name through API and verify the result
