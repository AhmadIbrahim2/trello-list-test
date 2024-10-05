Feature: Delete List Functionality

    Scenario: Validate that the user can delete list
        When The user click on list actions button
        And Choose Archive this list from list actions
        Then The list should be deleted