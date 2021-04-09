class ShippingStepPage {
    private CartNav: string;

    constructor() {
        this.CartNav = ".cart_navigation span";
    }

    public goCartNavigation(): void {
        cy.get(this.CartNav).click();

    }

}
export { ShippingStepPage }
