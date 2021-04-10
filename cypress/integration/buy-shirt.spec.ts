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

    /* let menuContentPage: MenuContentPage;
     let productListPage: ProductListPage;
     let loginPage: LoginPage;
     let shippingStepPage: ShippingStepPage;
     let addressStepPage: AddressStepPage;
     let paymentStepPage: PaymentStepPage;

     before(() => {
         menuContentPage = new MenuContentPage;
         productListPage = new ProductListPage;
         loginPage = new LoginPage;
         shippingStepPage = new ShippingStepPage;
         addressStepPage = new AddressStepPage;
         paymentStepPage = new PaymentStepPage;
     })*/


    it("then the t-shirt should be bought", () => {

        menuContentPage.visitMenuContentPage()
        menuContentPage.goToTShirtMenu()

        //product
        productListPage.goAddToCart("Faded Short Sleeve")
        productListPage.GoToCheckout()

        //shopping
        shoppingCartPage.GoToCheckout()

        //login
        loginPage.insertMail("aperdomobo@gmail.com")
        loginPage.insertPassword("WorkshopProtractor")
        loginPage.login()


        //shipping
        shippingStepPage.goCartNavigation()


        //address
        addressStepPage.ReviewAddress()
        addressStepPage.ConfirmAddress()

        //payment
        paymentStepPage.SelectPayment()


        paymentStepPage.ConfirmPayment()


        paymentStepPage.GetConfirmationMessage()
            .should("have.text", "Your order on My Store is complete.");
    });
})
