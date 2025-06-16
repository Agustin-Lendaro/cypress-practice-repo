import { products } from "../../support/pages/products"

describe("Search product", () => {
    
     let globalData
     
     before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Busca los productos", function() {
      
        cy.goToHome()
        products.goToProducts()
        products.searchProduct(globalData.products.product1)
    })
})