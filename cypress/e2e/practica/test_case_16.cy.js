import { products } from "../../support/pages/products"
import { login } from "../../support/pages/login_page"
import { cart } from "../../support/pages/cart"

describe("Place Order: Login before Checkout", () => {
    
    let globalData
    
    before('Crear cuenta', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 

        cy.goToHome()
        login.goToLogin()
        login.createAccount(globalData.test1.username, globalData.test1.email, globalData.test1.gender, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
        login.verifyLoggedAccount(globalData.test1.username)
        cy.clearAllCookies()
        })
    }) 

    after("Borrar Cuenta", () =>{
        cy.clearAllCookies()
        cy.goToHome()
        
        login.loginToApp(globalData.test1.email, globalData.test1.password, globalData.test1.username)
        login.DeleteAccount(globalData.test1.username)
    })

    it("Agrega, crea cuenta y confirma compra", function() {

        cy.goToHome()
        
        login.loginToApp(globalData.test1.email, globalData.test1.password, globalData.test1.username)
        products.addNthProduct(2)
        products.viewCartPopup()
        cart.proceedToCheckout()
        cart.checkOutAddressInfo(globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.city, globalData.test1.state, globalData.test1.zipcode, globalData.test1.country, globalData.test1.mobile)
        cart.checkOutComment("lorem ipsum")
        cart.clickPlaceOrder()
        cart.typeCardDetails(globalData.testcard.name, globalData.testcard.number, globalData.testcard.cvc, globalData.testcard.expirationMonth, globalData.testcard.expirationYear)
        cart.checkSuccessfulOrder()
       
    })
})