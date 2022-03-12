Feature: This is a set of tests

  # This is just a test
  Scenario: I want to find element in page
    Given I want to go to "http://localhost:3000"
    When I fill the title input with "Test puppeteer title"
    Then the description input with "Test puppeteer description"
    Then there should be a div with the h2 with "Test puppeteer title"
    Then I want to check on the database
