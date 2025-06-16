import { home } from "../../support/pages/home"

describe("Verify Scrool Up with arrow", () => {
    
  

    it("Verifica y aumenta", function() {
    
        cy.goToHome()
        home.scrollToBottom()
        home.scrollToTop()

    })
})