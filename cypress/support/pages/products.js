export class ProductsPage {
   
    
    goToProducts(){
        cy.get("a[href='/products']").click()
        cy.get(".features_items").each(($el) =>{
            cy.wrap($el).should("be.visible")
        })
    }

    searchProduct(product){
        cy.get("#search_product").type(product)
        cy.get("#submit_search").click()

        cy.get("body").then(($body) =>{
            const results= $body.find("div [class = 'productinfo text-center']")
            
            if (results.length >0) {
                cy.get("div [class = 'productinfo text-center']").each(($el) =>{
                    cy.wrap($el).contains(product, {matchCase: false}).should("be.visible")
                })
            } else {
                cy.get("div [class = 'productinfo text-center']").should("not.exist")
            }
        })
     
    }
   
    addAllProducts(){
        
        cy.get("div [class = 'productinfo text-center']").each(($el) =>{
            cy.wrap($el).find("[class ='fa fa-shopping-cart']").click()
            cy.wait(50)
            products.continueShopping()
        }
    )
        

    }  


    addNthProduct(number,){
        cy.get("[class = 'productinfo text-center']").eq(number -1).find("[class ='fa fa-shopping-cart']").click()
        cy.wait(500)

                
    }


    addNthProductv2(number, itemsAlias, productsData) {
        return cy.get(".productinfo.text-center").eq(number - 1).find(".fa.fa-shopping-cart").click()
        .wait(500)
        .then(() => {
          const product = productsData[number - 1]; 
    
          if (!product) {
            throw new Error(`No product found at index ${number - 1}`);
          }
    
          cy.get(itemsAlias).then((itemsInCart) => {
            const existing = itemsInCart.find((item) => item.id === product.id);
            if (existing) {
              existing.quantity += 1;
            } else {
              itemsInCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
              });
            }
    
            cy.wrap(itemsInCart).as(itemsAlias.replace('@', ''));
          });
        });
      }
   

    continueShopping(){
        cy.get(".modal-content").find(" [class = 'btn btn-success close-modal btn-block']").click({force: true})
    }

    viewCartPopup(){
        cy.get(".modal-content").find("a[href='/view_cart']").click({force: false})
    }


    viewProduct(number){
        cy.get("ul[class='nav nav-pills nav-justified']").eq(number -1).find(`a[href='/product_details/${number}']`).click()
    }

    modifyQuantity(number){
        cy.get("#quantity").clear().type(number)
    }
    
    addToCart(){
        cy.get("[class='btn btn-default cart']").click()
    }


    //categories

    checkCategories(){
        cy.get("[class='panel-group category-products']").should("be.visible")
    }
    expandCategory(category){
        cy.get(`[href="#${category}"]`).click()
    }

    clickSubcategory(subcategoryID){
        cy.get(`[href="/category_products/${subcategoryID}"]`).click()
    }

    selectSubcategory(category, subcategoryName, subcategoryID){
        products.expandCategory(category)
        products.clickSubcategory(subcategoryID)
        cy.get("[class='title text-center']").contains(category + " - " + subcategoryName + " Products")
    }
    


    selectBrand(brand){
        cy.get(`[href="/brand_products/${brand}"]`).click()
        cy.get("[class='title text-center']").contains("Brand - " + brand + " Products")
    }






    writeReview(name, email, review){
        cy.get("a[href='#reviews']").should("be.visible")
        cy.get("#name").type(name)
        cy.get("#email").type(email)
        cy.get("#review").type(review)
        cy.get("#button-review").click()
        cy.get("[class='alert-success alert']").should("be.visible")
    }


    addRecommended(){
        cy.get("[class='btn btn-default add-to-cart']").should("be.visible").first().click()
    }
}



export const products = new ProductsPage()