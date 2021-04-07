import { MenuContentPage } from "../page/index"
import { ProductListPage } from "../page/index"
import { ShoppingCartPage } from "../page/index"
import { LoginPage } from "../page/index"
import { ShippingStepPage } from "../page/index"
import { AddressStepPage } from "../page/index"
import { PaymentStepPage } from "../page/index"


const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const shippingStepPage = new ShippingStepPage();
const addressStepPage = new AddressStepPage();
const paymentStepPage = new PaymentStepPage();


describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {

        menuContentPage.visitMenuContentPage()
        //cy.visit("http://automationpractice.com/");
        menuContentPage.goToTShirtMenu()
        //cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();

        //product
        productListPage.goAddToCart()
        //cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
        productListPage.goThisButton()
        //cy.get("[style*=\"display: block;\"] .button-container > a").click();

        //shopping
        shoppingCartPage.Cart()
        //cy.get(".cart_navigation span").click();

        //login
        loginPage.insertMail("aperdomobo@gmail.com")
        //cy.get("#email").type("aperdomobo@gmail.com");
        loginPage.insertPassword("WorkshopProtractor")
        //cy.get("#passwd").type("WorkshopProtractor");
        loginPage.goSubmit()
        //cy.get("#SubmitLogin").click();

        //shipping
        shippingStepPage.goCartNavigation()
        //cy.get(".cart_navigation span").click();

        //address
        addressStepPage.ReviewAddress()
        //cy.get(".checker").click();
        addressStepPage.ConfirmAddress()
        //cy.get(".cart_navigation span").click();

        //payment
        paymentStepPage.PaymentType()
        //cy.get("a.bankwire").click();

        paymentStepPage.ConfirmPayment()
        //cy.get(".cart_navigation span").click();

        paymentStepPage.ConfirmationMessage()
            .should("have.text", "Your order on My Store is complete.");

        //cy.get("#center_column > div > p > strong")
        //    .should("have.text", "Your order on My Store is complete.");
    });
})
