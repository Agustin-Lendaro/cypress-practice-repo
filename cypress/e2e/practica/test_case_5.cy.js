describe("Register existing email", () => {
    
    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Utiliza email ocupado", function() {
      
        cy.goToHome()

       cy.get(".fa-lock").click()

        cy.get("[data-qa='signup-name']").type(globalData.permanentaccount.username)
        cy.get("[data-qa='signup-email']").type(globalData.permanentaccount.email)
        cy.get("[data-qa='signup-button']").click()

        cy.get('p[style="color: red;"]').contains("Email Address already exist!").should("be.visible")


    })
})