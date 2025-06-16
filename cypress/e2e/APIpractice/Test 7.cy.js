
describe('POST To Verify Login with valid details', () => {

    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it('Post test, usuario existe', () => {
        cy.request({
            method: 'POST',
            url: "https://automationexercise.com/api/verifyLogin",
            form: true,
            body: {
                email: globalData.permanentaccount.email,
                password: globalData.permanentaccount.password
            }
                     
        }).then((res) => {
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            


            
            // // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

            expect(body.message).to.equal("User exists!")

            expect(body).to.have.property("responseCode", 200)
           
        })
    })
  })