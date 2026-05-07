Feature: Login Functionality

Scenario: Successful Login
Given user is on sauce login page
When user enters username
And user enters password
And user clicks login button
Then user should see homepage
