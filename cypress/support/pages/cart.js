export class CartsPage {
    

    goToCart(){
        cy.get("[class='nav navbar-nav']").find("a[href='/view_cart']").click()
    }
   
    
   
    proceedToCheckout(){
        cy.get(".check_out").click()
    }

    registerPopup(){
        cy.get(".modal-content").find("a[href='/login']").click()
    }

    checkOutAddressInfo(firstname, lastname, company, address1, address2, city, state, zipcode, country, mobile){
        cy.get("#address_delivery").find("[class = 'address_firstname address_lastname']").contains(firstname + " "+ lastname)
        cy.get("#address_delivery").find("[class = 'address_address1 address_address2']").contains(company)
        cy.get("#address_delivery").find("[class = 'address_address1 address_address2']").contains(address1)
        cy.get("#address_delivery").find("[class = 'address_address1 address_address2']").contains(address2)
        cy.get("#address_delivery").find("[class = 'address_city address_state_name address_postcode']").contains(city + " "+ state + " "+ zipcode)
        cy.get("#address_delivery").find("[class = 'address_country_name']").contains(country)
        cy.get("#address_delivery").find("[class = 'address_phone']").contains(mobile)
        
    }

    checkOutBillingInfo(firstname, lastname, company, address1, address2, city, state, zipcode, country, mobile){
        cy.get("#address_invoice").find("[class = 'address_firstname address_lastname']").contains(firstname + " "+ lastname)
        cy.get("#address_invoice").find("[class = 'address_address1 address_address2']").contains(company)
        cy.get("#address_invoice").find("[class = 'address_address1 address_address2']").contains(address1)
        cy.get("#address_invoice").find("[class = 'address_address1 address_address2']").contains(address2)
        cy.get("#address_invoice").find("[class = 'address_city address_state_name address_postcode']").contains(city + " "+ state + " "+ zipcode)
        cy.get("#address_invoice").find("[class = 'address_country_name']").contains(country)
        cy.get("#address_invoice").find("[class = 'address_phone']").contains(mobile)
        
    }

    checkOutDetails(firstname, lastname, company, address1, address2, city, state, zipcode, country, mobile){
        cart.checkOutAddressInfo(firstname, lastname, company, address1, address2, city, state, zipcode, country, mobile)
        cart.checkOutBillingInfo(firstname, lastname, company, address1, address2, city, state, zipcode, country, mobile)
        
    }

    checkOutComment(message){
        cy.get("textarea[class='form-control']").type(message)
    }

    clickPlaceOrder(){
        cy.get("a[href='/payment']").click()
    }

    typeCardName(name){
        cy.get("input[name='name_on_card']").type(name)
    }
    typeCardNumber(number){
        cy.get("input[name='card_number']").type(number)
    }

    typeCardCVC(cvc){
        cy.get("input[name='cvc']").type(cvc)
    }

    typeCardExpiration(month, year){
        cy.get("input[name='expiry_month']").type(month)
        cy.get("input[name='expiry_year']").type(year)
        
    }
    typeCardDetails(name, number, cvc, month, year){
        cart.typeCardName(name)
        cart.typeCardNumber(number)
        cart.typeCardCVC(cvc)
        cart.typeCardExpiration(month, year)
        
    }

    clickConfirmOrder(){
        cy.get("#submit").click()
    }

    checkSuccessfulOrder(){
        
        cart.clickConfirmOrder()
        
        cy.get("p").should("be.visible").contains("Congratulations! Your order has been confirmed!")
    }

    downloadInvoice(){
        cy.get("[class='btn btn-default check_out']").click()
        cy.readFile("cypress/downloads/invoice.txt")
    }

    removeProduct(id){
        let idNumber = id
        cy.get(`[data-product-id="${idNumber}"]`).click()
        cy.get(`[data-product-id="${idNumber}"]`).should("not.exist")
    }


    checkProductInCart(){
        cy.get(".cart_product").should("be.visible")
    }


    checkItems(itemsInCart) {
        cy.get("tbody tr").each(($tr, index) => {
          const expectedItem = itemsInCart[index];
          expect(expectedItem, `Item at index ${index} exists`).to.not.be.undefined;
      
          cy.wrap($tr).within(() => {
            cy.get(".cart_description h4 a").should("contain.text", expectedItem.name);
            cy.get(".cart_price p").should("contain.text", expectedItem.price);
            cy.get(".cart_quantity button").should("contain.text", expectedItem.quantity);
           
           
           // cy.get(".cart_total_price").should("exist")

                    
            cy.get(".cart_price p").invoke("text").then((cartPrice) => {
                const price = parseFloat(cartPrice.replace("Rs. ", "").trim());

            cy.get(".cart_quantity button").invoke("text").then((cartQuantity) => {
                const quantity = parseInt(cartQuantity.trim());

                
            cy.get(".cart_total_price").invoke("text").then((totalPrice) => {
                    const total = parseFloat(totalPrice.replace("Rs. ", "").trim());

                    // Final assertion 
                const expectedTotal = price * quantity;
                expect(expectedTotal).to.equal(total);
                });
              });
            });
          });
        });
      }

}
export const cart = new CartsPage()