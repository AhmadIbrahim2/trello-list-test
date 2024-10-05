/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import createBoardActions from '../../../pageObjects/createBoard/actions.cy';
import createBoardAssertions from '../../../pageObjects/createBoard/assertions.cy';

const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();

const boardName = "My First Board";


Given ("The user login in trello website",()=>{
    cy.loginToTrello()
    cy.wait(3000)
});

When ("Click on create button from navbar",()=>{
    createBoardAction.clickOnCreateButton()
});

When ("Choose create board from drop down options",()=>{
    createBoardAction.chooseCreateBoardOption()
});

When ("Type the board title in board title field",()=>{
    createBoardAction.typeInBoardTitleInputField(boardName)
});

When ("Click on create button",()=>{
    createBoardAction.clickOnCreateBoardButton()
});

Then ("The board will be created successfully",()=>{
    createBoardAssertion.checkBoardNameContent(boardName)
});
