import { products } from "../../support/pages/products"
import { cart } from "../../support/pages/cart"





describe(" Add to cart from Recommended items", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

       cy.goToHome()

       products.addRecommended()
       products.viewCartPopup()
    
       cart.checkProductInCart() 
    })
})