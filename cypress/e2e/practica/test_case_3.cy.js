describe("Incorrect User Login", () => {
    
    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Ingresa contraseña/mail incorrectamente", function() {
      
        cy.goToHome()

        cy.get(".fa-lock").click()

       
        cy.get("[data-qa='login-email']").should("be.visible").type(globalData.permanentaccount.email + "asd")
        cy.get("[data-qa='login-password']").type(globalData.permanentaccount.password + "asd")
        cy.get("[data-qa='login-button']").click()

        cy.get('p[style="color: red;"]').contains("Your email or password is incorrect!").should("be.visible")

        
    })
})