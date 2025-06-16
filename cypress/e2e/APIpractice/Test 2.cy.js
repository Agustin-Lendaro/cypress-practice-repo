
describe('Get All Products List', () => {


    it('Post test, debe fallar', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/productsList",
            
           body: {
            name: "John Doe",
            Gender: "male"
           }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.equal(200)
            expect(res.body.message).to.eq("This request method is not supported.")
            expect(res.body).has.property("responseCode", 405)
           
        })
    })
  })