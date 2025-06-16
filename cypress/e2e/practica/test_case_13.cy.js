import { products } from "../../support/pages/products"


describe("Verify Product quantity", () => {
    
        

    it("Verifica y aumenta", function() {

        cy.goToHome()
        products.goToProducts()
                
        products.viewProduct(1)
        products.modifyQuantity(4)
        products.addToCart()
        products.viewCartPopup()
       
    })
})