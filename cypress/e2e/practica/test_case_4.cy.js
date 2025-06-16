describe("Correct User Logout", () => {
    
    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Conecta y desconecta una cuenta", function() {
      
        cy.goToHome()

        cy.get(".fa-lock").click()
       
        cy.get("[data-qa='login-email']").type(globalData.permanentaccount.email)
        cy.get("[data-qa='login-password']").type(globalData.permanentaccount.password)
        cy.get("[data-qa='login-button']").click()

        cy.get(".navbar-nav").should("be.visible").contains("Logged in as " + globalData.permanentaccount.username)
        cy.get("a[href='/logout']").click()
        cy.url().should("equal", "https://automationexercise.com/login")


    })
})