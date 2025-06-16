describe("Verify All Products and product detail page", () => {
    
       

    it("Verify products", function() {
      
       cy.visit("http://automationexercise.com")
        
       cy.get("a[href='/products']").click()
       
       cy.url().should("equal", "https://automationexercise.com/products")
       cy.get(".features_items").should("be.visible")
       cy.get("[class^='nav nav-pills nav-justified']").first().within (() =>{
        cy.get("a").click()
       })

       cy.get(".product-information").within(() =>{
        cy.get("h2").should("be.visible").should("not.be.empty")
        cy.get("p").contains("Category:").should("be.visible")
        cy.get("p").contains("Availability:").should("be.visible")
        cy.get("p").contains("Condition:").should("be.visible")
        cy.get("p").contains("Brand:").should("be.visible")

       })
               

    })
})