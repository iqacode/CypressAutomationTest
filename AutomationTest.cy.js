describe("Verify title-Positive Test", () => {
    it("test1", () =>{

        cy.visit("https://amazon.com/")
        cy.title().should("eq","amazon")

    })

    it("Verify title-Negative test", () =>{

        cy.visit("https://amazon.com/")
        cy.title().should("eq","OrangeHRMss")

    })
})
