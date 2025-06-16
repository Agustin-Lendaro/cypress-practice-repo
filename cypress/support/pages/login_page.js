export class LoginPage {

    
    goToLogin() {
        cy.visit("https://automationexercise.com/login")
    }

//Sign up

enterSignUpName(name) {
    cy.get("[data-qa='signup-name']").type(name)
}

enterSingUpEmail (email) {
    cy.get("[data-qa='signup-email']").type(email)
}

clickSignUp() {
    cy.get("[data-qa='signup-button']").click()
}

signUpToApp(name, email){
    login.goToLogin()
    login.enterSignUpName(name)
    login.enterSingUpEmail(email)
    login.clickSignUp()
}

signUpExistingEmail (name, email){
    login.signUpToApp(name, email)
    cy.get('p[style="color: red;"]').contains("Email Address already exist!").should("be.visible")
}

//additional info


singUpGender(gender){
    if (gender== "Male"){
        cy.get("#id_gender1").click()  //#id_gender1 = MR, #id_gender2 = Mrs
    }
    if (gender=="Female"){
        cy.get("#id_gender2").click()  //#id_gender1 = MR, #id_gender2 = Mrs
    }
}

signUpNameCheck(username){
    cy.get(".form-group").find("#name").should("have.value", username)
}

signUpEmailCheck(email){
    cy.get(".form-group").find("#email").should("have.value", email)
}

signUpPassword(password) {
    cy.get("#password").type(password)
}


signUpBirthDay (day){
    cy.get("#days").select(day)
}

signUpBirthMonth(month){
    cy.get("#months").select(month)
}

signUpBirthYear(year){
    cy.get("#years").select(String(year))
}

/*
cy.get("#newsletter").click()
cy.get("#optin").click()

*/
signUpFirstName(first_name){
    cy.get("#first_name").type(first_name)
}

signUpLastName(last_name){
    cy.get("#last_name").type(last_name)
}
signUpCompany(company){
    cy.get("#company").type(company)
}
signUpAddress1(address1){
    cy.get("#address1").type(address1)
}
signUpAddress2(address2){
    cy.get("#address2").type(address2)
}
signUpCountry(country){
    cy.get("#country").select(country)
}
signUpState(state){
    cy.get("#state").type(state)
}
signUpCity(city){
    cy.get("#city").type(city)
}
signUpZipCode(zipcode){
    cy.get("#zipcode").type(zipcode)
}
signUpMobile(mobilenumber){
    cy.get("#mobile_number").type(mobilenumber)   
}


SignUpData (gender, username, email, password, day, month, year, first_name, last_name, company, address1, address2, country, state, city, zipcode, mobile){
    login.singUpGender(gender)
    login.signUpNameCheck(username)
    login.signUpEmailCheck(email)
    login.signUpPassword(password)
    login.signUpBirthDay(day)
    login.signUpBirthMonth(month)
    login.signUpBirthYear(year)
    login.signUpFirstName(first_name)
    login.signUpLastName(last_name)
    login.signUpCompany(company)
    login.signUpAddress1(address1)
    login.signUpAddress2(address2)
    login.signUpCountry(country)
    login.signUpState(state)
    login.signUpCity(city)
    login.signUpZipCode(zipcode)
    login.signUpMobile(mobile)

    cy.get("#newsletter").click()
    cy.get("#optin").click()

    cy.get("button[data-qa='create-account']").click()
    cy.get("[data-qa='account-created']").should("be.visible")


    cy.get("[data-qa='continue-button']").click()
    login.verifyLoggedAccount(username)
}


createAccount(name, email, gender, password, day, month, year, first_name, last_name, company, address1, address2, country, state, city, zipcode, mobile){
    login.signUpToApp(name, email)
    login.SignUpData (gender, name, email, password, day, month, year, first_name, last_name, company, address1, address2, country, state, city, zipcode, mobile)
}

DeleteAccount(username){
    cy.get(".navbar-nav").should("be.visible").contains("Logged in as " + username)
    cy.get("a[href='/delete_account']").click()

    cy.get("[data-qa='account-deleted']").should("be.visible")
    cy.get("[data-qa='continue-button']").click()
}


//Login



    enterEmailAddress(email) {
        cy.get("[data-qa='login-email']").type(email)
    }

    enterPassword(password) {
        cy.get("[data-qa='login-password']").type(password)
    }

    clickLoginButton() {
        cy.get("[data-qa='login-button']").click()
    }

    verifyEmailRequiredError() {
        cy.get('.error').should('have.text', 'The email field is required.')
    }

    verifyInvalidCredentialsError() {
        cy.get('.dynamic-text.help-block').should('have.text', 'Your username or password is invalid. Please try again.')
    }

    verifyLoggedAccount(username){
        cy.get(".navbar-nav").should("be.visible").contains("Logged in as " + username)
    }

    loginToApp(email, password, username) {
        login.goToLogin()
        login.enterEmailAddress(email)
        login.enterPassword(password)
        login.clickLoginButton()
        login.verifyLoggedAccount(username)
    }

    incorrectLoginToApp(email, password) {
        login.goToLogin()
        login.enterEmailAddress(email)
        login.enterPassword(password + 1)
        login.clickLoginButton()
        cy.get('p[style="color: red;"]').contains("Your email or password is incorrect!").should("be.visible")
    }
    logOut(username){
        cy.get(".navbar-nav").should("be.visible").contains("Logged in as " + username)
        cy.get("a[href='/logout']").click()
        cy.url().should("equal", "https://automationexercise.com/login")
    }
       
}
export const login = new LoginPage()