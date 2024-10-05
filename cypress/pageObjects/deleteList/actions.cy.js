class deleteListActions {
    clickOnListActionsButtom () {
        cy.wait(3000)
        cy.findByTestId("list-edit-menu-button").click();
        return this;
    }

    chooseArchiveThisList () {
        cy.findByTestId("list-actions-archive-list-button").click();
        cy.wait(3000)
        return this;
    }
}

export default deleteListActions;