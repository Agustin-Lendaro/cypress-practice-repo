import { login } from "../../../support/pages/login_page"

describe("User loguin test", () => {
    
    let globalData

    beforeEach("Ir a home", () =>{
        cy.goToHome()
    })

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Registra una cuenta", function() {

        
        login.createAccount(globalData.test1.username, globalData.test1.email, globalData.test1.gender, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)

      /*  login.signUpToApp(globalData.test1.username, globalData.test1.email)

        
        login.SignUpData(globalData.test1.gender, globalData.test1.username, globalData.test1.email, globalData.test1.password, globalData.test1.birthday.day, globalData.test1.birthday.month, globalData.test1.birthday.year, globalData.test1.firstname, globalData.test1.lastname, globalData.test1.company, globalData.test1.address1, globalData.test1.address2, globalData.test1.country, globalData.test1.state, globalData.test1.city, globalData.test1.zipcode, globalData.test1.mobile)
*/
        
       
    })

    it("Trata de crear una cuenta con nombre existente", () =>{
        login.goToLogin()
        login.signUpExistingEmail(globalData.test1.username, globalData.test1.email)
    })

    it("Borra la cuenta", () =>{
        
        login.loginToApp(globalData.test1.email, globalData.test1.password, globalData.test1.username)
        login.DeleteAccount(globalData.test1.username)
    })
})