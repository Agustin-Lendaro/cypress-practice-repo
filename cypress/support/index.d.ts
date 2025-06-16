declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Chainable<any>
        apiLogin(): Chainable<any>

        waitForFirstLoad(): Chainable<any>
        logout(): Chainable<any>
    
    }
}