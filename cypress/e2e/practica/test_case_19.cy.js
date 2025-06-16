import { products } from "../../support/pages/products"


let globalData


before('Before Hook', () => {
    cy.fixture("practice").then((data) => {
        globalData = data 

    })
})

//randomizador de marcas
function getRandomBrand(brands) {
    const randomIndex = Math.floor(Math.random() * brands.length)
    return brands[randomIndex]
  }




 //segundo randomizador, asegura resultado diferente al primero
 function getRandomBrandExcluding(brands, excludedBrand) {
    // saca el primer resultado
    const filteredBrands = brands.filter(brand => brand !== excludedBrand)
    return getRandomBrand(filteredBrands)
  }

describe(" View & Cart Brand Products", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

        cy.goToHome()

        const randomBrand = getRandomBrand(globalData.brands)
        const secondRandomBrand = getRandomBrandExcluding(globalData.brands, randomBrand)
        

        products.selectBrand(randomBrand)
        products.selectBrand(secondRandomBrand)

       
    })
})