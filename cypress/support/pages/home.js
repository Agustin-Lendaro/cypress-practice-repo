export class HomePage {
    
    scrollToBottom(){
        cy.scrollTo("bottom")
        cy.get(".single-widget").find("h2").contains("Subscription").should("be.visible")
        
    }

    scrollToTop(){
        cy.scrollTo("top")
        home.checkPracticeMessage()
    }

    clickArrowUp(){
        cy.get("#scrollUp").click()
        home.checkPracticeMessage()
    }
    
    checkPracticeMessage(){
        cy.get(".col-sm-6").find("h2").contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
    }
    
}
export const home = new HomePage()