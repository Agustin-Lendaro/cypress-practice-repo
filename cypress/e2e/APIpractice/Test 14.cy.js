
describe('Get All Brands List', () => {

    let globalData

    before('Before Hook', () => {
        cy.fixture("practice").then((data) => {
            globalData = data 
        })
    })

    it('Recibe JSON de marcas', () => {
        cy.request({
            method: 'GET',
            url: "https://automationexercise.com/api/getUserDetailByEmail",
            qs: {
                email:globalData.permanentaccount.email  
            }
                     
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
           
           
        })
    })
  })