/// <reference types = "cypress" />
import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import createBoardActions from '../../../pageObjects/createBoard/actions.cy';
import createListActions from '../../../pageObjects/createList/actions.cy';
import updateListNameActions from '../../../pageObjects/updateList/actions.cy';
import updateListNameAssertions from '../../../pageObjects/updateList/assertions.cy';

const createBoardAction = new createBoardActions();
const createListAction = new createListActions();
const updateListName = new updateListNameActions();
const updateListNameAssertion = new updateListNameAssertions();

const boardName = "My First Board";
const listName = "My First List";
const newName = "My New List";

before (()=>{

    //login to the trello website
    cy.loginToTrello()
    cy.wait(3000)

    //create new board
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoardTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
    cy.wait(3000)

    //create new list
    createListAction.TypeListName(listName);
    createListAction.ClickOnAddListButton();
})

When('The user click on list name text area',()=>{
    updateListName.clickOnListNameTextArea();
});

When('Rename the list name',()=>{
    updateListName.renameListName(newName);
});

Then('The list name should be updated',()=>{
    updateListNameAssertion.checkNewNameUpdate(newName);
});