export class HeadersPage {
   
    contact(){
        cy.get("a[href='/contact_us']").click()
        cy.get("[class^='title text-center']")
    }

    login(){
        cy.get("a[href='/login']").click()
    }

    products(){
        cy.get("a[href='/products']").click()
    }

    cart(){
        cy.get("a[href='/view_cart']").click()
    }

   
    title() {
        return cy.title()
    }
}
export const Headers = new HeadersPage()