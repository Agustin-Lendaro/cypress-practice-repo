import { products } from "../../../support/pages/products"
import { cart } from "../../../support/pages/cart"

describe("Add Products in cart", () => {
    before(function () {
      cy.fixture("products").as("productsData"); 
    });
  
    it("Agrega y comprueba", function () {
      const initialCart = [];
      cy.wrap(initialCart).as("itemsInCart");
  
      cy.goToHome();
      products.goToProducts();
  
      cy.get("@productsData").then((data) => {
        const productList = data.products; 
  
        products.addNthProductv2(1, "@itemsInCart", productList)
        .then(() => products.continueShopping())
        .then(() => products.addNthProductv2(2, "@itemsInCart", productList))
        .then(() => products.continueShopping())
        .then(() => products.addNthProductv2(2, "@itemsInCart", productList))
        .then(() => products.viewCartPopup())
        .then(() => {
            cy.get("@itemsInCart").then((itemsInCart) => {
              cy.log("Final cart: " + JSON.stringify(itemsInCart));
              cart.checkItems(itemsInCart);
            });
          });
      });
    });
  });