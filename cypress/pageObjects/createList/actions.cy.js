class createListActions {

    TypeListName(listName){
        cy.findByTestId("list-name-textarea").type(listName)
        return this;
    }

    ClickOnAddListButton() {
        cy.findByTestId("list-composer-add-list-button").click()
        return this;
    }
}

export default createListActions;