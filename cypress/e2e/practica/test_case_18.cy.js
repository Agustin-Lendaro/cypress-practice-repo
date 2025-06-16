import { products } from "../../support/pages/products"


let globalData
before('Before Hook', () => {
    cy.fixture("practice").then((data) => {
        globalData = data 
        
    })
})

describe(" View Category Products", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

        cy.goToHome()

       products.checkCategories()
       products.selectSubcategory(globalData.categories.women.name, globalData.categories.women.subcategory.dress.name,  globalData.categories.women.subcategory.dress.ID)

       products.selectSubcategory(globalData.categories.men.name, globalData.categories.men.subcategory.tshirts.name,  globalData.categories.men.subcategory.tshirts.ID)
       
    })
})