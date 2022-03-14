Feature: I want to create a post

  Scenario: Creating a post
    Given I open the website
    When I fill the title input with "Test cy-cucumber title"
    And I fill the description input with "Test cy-cucumber description"
    And I click on the submit button
    Then I should have a post with the title "Test cy-cucumber title"
    #And the same entry on the database
