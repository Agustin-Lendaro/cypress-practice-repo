
describe('POST To Verify Login with invalid details', () => {

    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it('Post test,error por datos erroneos', () => {
        cy.request({
            method: 'POST',
            url: " https://automationexercise.com/api/verifyLogin",
            form: true,
            body: {
                email: globalData.permanentaccount.email + 1,
                password: globalData.permanentaccount.password + 1 
            }
                    
        }).then((res) => {
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            


            
            // // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

            expect(body.message).to.equal("User not found!")

            expect(body).to.have.property("responseCode", 404)
           
        })
    })
  })