Feature: Update list Functionality

    Scenario: Validate that the user can update list
        When The user click on list name text area
        And Rename the list name
        Then The list name should be updated