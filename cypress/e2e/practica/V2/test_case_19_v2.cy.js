import { products } from "../../../support/pages/products"
import { util } from "../../../support/utilities"
before('Load Fixture', () => {
  cy.fixture('practice').as('fixtureData') // alias the fixture as @fixtureData
})

describe(" View & Cart Brand Products", () => {
        
    it("Agrega, crea cuenta y confirma compra", function() {

       cy.goToHome()

    // Access fixture via alias (using `this`)
    const brands = this.fixtureData.brands
    const randomBrand = util.getRandomBrand(brands)
    const secondRandomBrand = util.getRandomBrandExcluding(brands, randomBrand)

    products.selectBrand(randomBrand)
    products.selectBrand(secondRandomBrand)
  })
})