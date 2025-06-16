import { products } from "../../support/pages/products"


let globalData


before('Before Hook', () => {
    cy.fixture("practice").then((data) => {
        globalData = data 

    })
})



describe(" View & Cart Brand Products", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

       cy.goToHome()

       products.viewProduct(5)
       products.writeReview(globalData.test1.firstname, globalData.test1.email, "Esto es un texto de prueba")

       
    })
})