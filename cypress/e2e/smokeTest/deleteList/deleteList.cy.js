/// <reference types = 'cypress'/>
import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import createBoardActions from '../../../pageObjects/createBoard/actions.cy';
import createListActions from '../../../pageObjects/createList/actions.cy';
import deleteListActions from '../../../pageObjects/deleteList/actions.cy';
import deleteListAssertions from '../../../pageObjects/deleteList/assertions.cy';

const createBoardAction = new createBoardActions();
const createListAction = new createListActions();
const deleteListAction = new deleteListActions();
const deleteListAssertion = new deleteListAssertions();

const boardName = "My First Board";
const listName = "My First List";

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

});

When ('The user click on list actions button',()=>{
    deleteListAction.clickOnListActionsButtom();
})

When ('Choose Archive this list from list actions',()=>{
    deleteListAction.chooseArchiveThisList();
})

Then ('The list should be deleted',()=>{
    deleteListAssertion.checkListExist(listName);
})