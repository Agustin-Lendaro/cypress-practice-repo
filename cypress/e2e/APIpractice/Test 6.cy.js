
describe('POST To Search Product without search_product parameter', () => {


    it('Post test, da error', () => {
        cy.request({
            method: 'POST',
            url: "https://automationexercise.com/api/searchProduct",
            form: true,
            body: {
                //search_product:"jean"  
            }
                     
        }).then((res) => {
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            


            
            // // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

            expect(body.message).to.equal("Bad request, search_product parameter is missing in POST request.")

            expect(body).to.have.property("responseCode", 400)
           
        })
    })
  })