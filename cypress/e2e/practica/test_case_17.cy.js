import { products } from "../../support/pages/products"

import { cart } from "../../support/pages/cart"

describe("Remove products from cart", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

        cy.goToHome()

        products.addNthProduct(3)
        products.continueShopping()
        products.addNthProduct(2)
        products.viewCartPopup()
        cart.removeProduct(3)
    })
})