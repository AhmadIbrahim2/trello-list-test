class deleteListAssertions {
    checkListExist(listName){
        cy.get(".QMKgZFIlTLiEJN").should("be.visible")
    }
}

export default deleteListAssertions;