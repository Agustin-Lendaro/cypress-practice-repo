
describe('Get All Products List', () => {


    it('Recibe JSON de productos', () => {
        cy.request({
            method: 'GET',
            url: "https://automationexercise.com/api/productsList",
           
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)

           
            // Convierte en objeto para la assertion
            const body = JSON.parse(res.body)

           

            expect(body).to.have.property("responseCode", 200)
           
        })
    })
  })