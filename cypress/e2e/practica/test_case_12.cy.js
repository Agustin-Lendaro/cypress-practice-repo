import { products } from "../../support/pages/products"
import { cart } from "../../support/pages/cart"

describe("Add Products in cart", () => {
    
    let globalData
    let productList
    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    

    it("Agrega y comprueba", function() {

        cy.goToHome()
        products.goToProducts()
                
        products.addNthProduct(1)
        products.continueShopping()
        products.addNthProduct(2)
        products.viewCartPopup()
    })
})