import { products } from "../../support/pages/products"
import { login } from "../../support/pages/login_page"
import { cart } from "../../support/pages/cart"

describe("Verify address details in checkout page", () => {
    
    let globalData
    
    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    }) 

    it("Agrega, crea cuenta y confirma compra", function() {

        cy.goToHome()

        login.createAccount(globalData.test1.username, globalData.test1.email, globalData.test1.gender, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
/*
        login.signUpToApp(globalData.test1.username, globalData.test1.email)
        login.SignUpData(globalData.test1.gender, globalData.test1.username, globalData.test1.email, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
        */
        login.verifyLoggedAccount(globalData.test1.username)

        products.addNthProduct(1)               
        
        products.viewCartPopup()
        cart.proceedToCheckout()
                   
        

        cart.checkOutDetails(globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.city, globalData.test1.state, globalData.test1.zipcode, globalData.test1.country, globalData.test1.mobile)
        
       
        login.DeleteAccount(globalData.test1.username)


    })
})