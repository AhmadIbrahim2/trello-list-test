class createBoardActions {
    clickOnCreateButton () {
        cy.findByTestId("header-create-menu-button").click()
        return this;
    }

    chooseCreateBoardOption () {
        cy.findByTestId("header-create-board-button").click()
        return this;
    }

    typeInBoardTitleInputField (boardName) {
        cy.findByTestId("create-board-title-input").type(boardName)
        return this;
    }

    clickOnCreateBoardButton () {
        cy.findByTestId("create-board-submit-button").click()
        return this;
    }
}
export default createBoardActions;