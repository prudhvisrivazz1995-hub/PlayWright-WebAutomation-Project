Feature: Login to SauceDemo site

  Scenario: Login with valid credentials
    Given I am on the SauceDemo login page
    When I login with valid username "standard_user" and password "secret_sauce"
    Then I should see the products page
