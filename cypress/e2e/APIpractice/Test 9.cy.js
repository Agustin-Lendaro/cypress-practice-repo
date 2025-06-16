
describe('API 9: DELETE To Verify Login', () => {

   /* let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })*/

    it('Delete test,error por falta de email', () => {
        cy.request({
            method: 'DELETE',
            url: " https://automationexercise.com/api/verifyLogin",
          /*  form: true,
            body: {
               // email: globalData.permanentaccount.email,
                password: globalData.permanentaccount.password
            }
              */       
        }).then((res) => {
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            


            
            // // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

            expect(body.message).to.equal("This request method is not supported.")

            expect(body).to.have.property("responseCode", 405)
           
        })
    })
  })