class createBoardAssertions {
    checkBoardNameContent(boardTitle){
        cy.findByTestId("board-name-display").should("be.visible").and("contain",boardTitle)
        return this;
    }
}
export default createBoardAssertions; 