/// <reference types = "cypress" />
import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import createBoardActions from '../../../pageObjects/createBoard/actions.cy';
import createListActions from '../../../pageObjects/createList/actions.cy';
import createListAssertions from '../../../pageObjects/createList/assertions.cy';

const createBoardAction = new createBoardActions();
const createListAction = new createListActions();
const createListAssertion = new createListAssertions();

const boardName = "My First Board";
const listName = "My First List";

before(()=>{
    //login to the trello website
    cy.loginToTrello()
    cy.wait(3000)

    //create new board
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoardTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
    cy.wait(3000)
});

When ("The user type list name in list name text area",()=>{
    createListAction.TypeListName(listName);
})

When ("The user click on Add list list button",()=>{
    createListAction.ClickOnAddListButton();
})

Then ("The new list created successfully",()=>{
    createListAssertion.checkNewListCreation(listName);  
})