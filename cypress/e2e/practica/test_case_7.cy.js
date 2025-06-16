describe("Verify Test Cases Page", () => {
    
      
    it("Goes to test cases page", function() {
      
       cy.visit("http://automationexercise.com")
        
       cy.get("a[href='/test_cases']").first().click()
       
       cy.url().should("equal", "https://automationexercise.com/test_cases")


    })
})