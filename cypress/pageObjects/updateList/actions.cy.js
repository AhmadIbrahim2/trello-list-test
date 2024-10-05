class updateListNameActions {

    clickOnListNameTextArea(){
        cy.findByTestId('list-name').click();
        return this;
    }

    renameListName(newName) {
        cy.wait(6000)
        cy.findByTestId('list-name-textarea').type(newName +"{enter}" ,{force:true});
        return this;
    }

}

export default updateListNameActions;