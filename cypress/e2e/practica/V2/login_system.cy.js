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

    it("Loguea correctamente y desconecta", function() {
        
        login.loginToApp(globalData.permanentaccount.email, globalData.permanentaccount.password, globalData.permanentaccount.username)
        login.logOut(globalData.permanentaccount.username)
       
    })

    it("Loguea incorrectamente", function() {
    
        login.incorrectLoginToApp(globalData.permanentaccount.email, globalData.permanentaccount.password)       
    })

    
})