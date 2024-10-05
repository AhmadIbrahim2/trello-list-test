class createListAssertions {
    checkNewListCreation(listName) {
        cy.findByTestId("list-name").should("be.visible").and("contain",listName)
        return this;
    }
}

export default createListAssertions;