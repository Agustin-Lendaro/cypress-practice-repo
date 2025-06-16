
describe('POST To Search Product', () => {


    it('Post test, da lista de objetos', () => {
        cy.request({
            method: 'POST',
            url: "https://automationexercise.com/api/searchProduct",
            form: true,
            body: {
                search_product:"jean"  
            }
                     
        }).then((res) => {

            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            
            // // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

            

            expect(body).to.have.property("responseCode", 200)
           
        })
    })
  })