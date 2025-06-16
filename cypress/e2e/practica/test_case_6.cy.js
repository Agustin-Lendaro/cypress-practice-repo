import { contact } from "../../support/pages/contact_us"

describe("Contact us", () => {
    
    it("Usa el formulario", function() {
      
        cy.goToHome()

        contact.goToContact()

        contact.contactFillForm("asd", "asd@hotmail.com", "test subject", "lorem ipsum")

        contact.contactUpload("cypress/fixtures/example.json")
              
        contact.contactSubmit()      

    })
})