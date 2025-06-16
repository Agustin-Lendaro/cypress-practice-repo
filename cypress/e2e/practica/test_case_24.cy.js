import { products } from "../../support/pages/products"
import { cart } from "../../support/pages/cart"
import { login } from "../../support/pages/login_page"

describe("Download Invoice after purchase order", () => {
    
    
    let globalData
    
    before('Before Hook', () => {
        
        cy.task("deleteFolder", "cypress/downloads/invoice.txt")
       
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    }) 

    it("Agrega, crea cuenta, descarga", function() {
    
        cy.goToHome()
        products.addNthProduct(1)               
        
        products.viewCartPopup()
        cart.proceedToCheckout()
        cart.registerPopup()

        login.createAccount(globalData.test1.username, globalData.test1.email, globalData.test1.gender, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
/*

        login.signUpToApp(globalData.test1.username, globalData.test1.email)
        login.SignUpData(globalData.test1.gender, globalData.test1.username, globalData.test1.email, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
  */
        login.verifyLoggedAccount(globalData.test1.username)
       
        cart.goToCart()
        cart.proceedToCheckout()

        cart.checkOutDetails(globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.city, globalData.test1.state, globalData.test1.zipcode, globalData.test1.country, globalData.test1.mobile)
        cart.checkOutComment("lorem ipsum")
        cart.clickPlaceOrder()
        cart.typeCardDetails(globalData.testcard.name, globalData.testcard.number, globalData.testcard.cvc, globalData.testcard.expirationMonth, globalData.testcard.expirationYear)
        cart.checkSuccessfulOrder()
        cart.downloadInvoice()
       
        login.DeleteAccount(globalData.test1.username)
    })
})