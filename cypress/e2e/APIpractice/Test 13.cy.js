
describe('API 13: PUT METHOD To Update User Account', () => {

    let globalData;
  
    before(() => {
      cy.fixture("practice").then((data) => {
        globalData = data;
  
        return cy.request({
          method: 'POST',
          url: "https://automationexercise.com/api/createAccount",
          form: true,
          body: {
            name: globalData.test1.username,
            email: globalData.test1.email,
            password: globalData.permanentaccount.password,
            title: globalData.test1.title,
            birth_date: globalData.test1.birthday.day,
            birth_month: globalData.test1.birthday.month,
            birth_year: globalData.test1.birthday.year,
            firstname: globalData.test1.firstname,
            lastname: globalData.test1.lastname,
            company: globalData.test1.company,
            address1: globalData.test1.address1,
            address2: globalData.test1.address2,
            country: globalData.test1.country,
            zipcode: globalData.test1.zipcode,
            state: globalData.test1.state,
            city: globalData.test1.city,
            mobile_number: globalData.test1.mobile
          }
        }).then((res) => {
          cy.log(JSON.stringify(res));
          expect(res.status).to.eq(200);
          const body = JSON.parse(res.body);
          expect(body.message).to.equal("User created!");
          expect(body).to.have.property("responseCode", 201);
        });
      });
    });
  
    it("Actualiza datos", () => {
      cy.request({
        method: 'PUT',
        url: "https://automationexercise.com/api/updateAccount",
        form: true,
        body: {
          name: globalData.test1.username,
          email: globalData.test1.email,
          password: globalData.permanentaccount.password,
          title: globalData.test1.title,
          birth_date: globalData.test1.birthday.day,
          birth_month: globalData.test1.birthday.month,
          birth_year: globalData.test1.birthday.year,
          firstname: globalData.test1.firstname,
          lastname: globalData.test1.lastname,
          company: globalData.test1.company,
          address1: globalData.test1.address1,
          address2: globalData.test1.address2 + " updated",
          country: globalData.test1.country,
          zipcode: globalData.test1.zipcode,
          state: globalData.test1.state,
          city: globalData.test1.city,
          mobile_number: globalData.test1.mobile
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(200);
        const body = JSON.parse(res.body);
        expect(body.message).to.equal("User updated!");
        expect(body).to.have.property("responseCode", 200);
      });
    });
  
    after(() => {
      cy.request({
        method: 'DELETE',
        url: "https://automationexercise.com/api/deleteAccount",
        form: true,
        body: {
          email: globalData.test1.email,
          password: globalData.permanentaccount.password
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(200);
        const body = JSON.parse(res.body);
        expect(body.message).to.equal("Account deleted!");
        expect(body).to.have.property("responseCode", 200);
      });
    });
  
  });