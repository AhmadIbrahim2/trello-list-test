class updateListNameAssertions {

    checkNewNameUpdate (newName) {
        cy.findByTestId("list-name").should("be.visible").and("contain",newName)
        return this;
    }
}

export default updateListNameAssertions;