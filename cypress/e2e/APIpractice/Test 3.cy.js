
describe('Get All Brands List', () => {


    it('Recibe JSON de marcas', () => {
        cy.request({
            method: 'GET',
            url: "https://automationexercise.com/api/brandsList",
           
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            
            // // Convierte en objeto para la assertion
           const body = JSON.parse(res.body)

          

            expect(body).to.have.property("responseCode", 200)


          
        })
    })
  })