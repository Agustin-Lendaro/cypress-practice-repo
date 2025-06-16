describe("Register and delete User", () => {
    
    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it("Registra y borra una cuenta", function() {
      /* cy.visit("https://automationexercise.com/")

        cy.get(".fa-lock").click()

        //Sign up page
        cy.get(".signup-form").contains("New User Signup!").should("exist")

        */
       cy.goToHome()

       cy.get(".fa-lock").click()

        cy.get("[data-qa='signup-name']").type(globalData.test1.username)
        cy.get("[data-qa='signup-email']").type(globalData.test1.email)
        cy.get("[data-qa='signup-button']").click()

        //Rellenar datos
        cy.get(".login-form").find("b").contains("Enter Account Information").should("be.visible")
        cy.get("#id_gender1").click()
        cy.get(".form-group").find("#name").should("have.value", globalData.test1.username)
        cy.get(".form-group").find("#email").should("have.value", globalData.test1.email)
        cy.get("#password").type(globalData.test1.password)

        cy.get("#days").select(globalData.test1.birthday.day)
        cy.get("#months").select(globalData.test1.birthday.month)
        cy.get("#years").select(String(globalData.test1.birthday.year))

        cy.get("#newsletter").click()
        cy.get("#optin").click()

        cy.get("#first_name").type(globalData.test1.firstname)
        cy.get("#last_name").type(globalData.test1.lastname)
        cy.get("#company").type(globalData.test1.company)
        cy.get("#address1").type(globalData.test1.address1)
        cy.get("#address2").type(globalData.test1.address2)
        cy.get("#country").select(globalData.test1.country)
        cy.get("#state").type(globalData.test1.state)
        cy.get("#city").type(globalData.test1.city)
        cy.get("#zipcode").type(globalData.test1.zipcode)
        cy.get("#mobile_number").type(globalData.test1.mobile)

        cy.get("button[data-qa='create-account']").click()
        cy.get("[data-qa='account-created']").should("be.visible")


        cy.get("[data-qa='continue-button']").click()


        cy.get(".navbar-nav").should("be.visible").contains("Logged in as " + globalData.test1.username)
        cy.get("a[href='/delete_account']").click()

        cy.get("[data-qa='account-deleted']").should("be.visible")
        cy.get("[data-qa='continue-button']").click()

    })
})