describe("Verify Subscription in Cart page", () => {
    
    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    

    it("Goes to cart, goes to footer and subscribes", function() {

        cy.visit("https://automationexercise.com/")
        cy.get("[class^='nav navbar-nav']").within(() =>{
            cy.get("a[href='/view_cart']").click()
        })
        

        cy.get("footer").scrollIntoView()
        cy.get("#susbscribe_email").type(globalData.permanentaccount.email)
        cy.get("#success-subscribe").should("not.be.visible")
        cy.get("#subscribe").click()
        cy.get("#success-subscribe").should("be.visible")
        
    })
})