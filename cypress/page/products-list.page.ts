class ProductListPage {
    private addToCart: string;
    private ProceedToCheckout: string

    constructor() {
        this.addToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.ProceedToCheckout = "[style*=\"display: block;\"] .button-container > a"
    }
    public goAddToCart(): void {
        cy.get(this.addToCart).click()
    }

    public GoToCheckout(): void {
        cy.get(this.ProceedToCheckout).click()
    }
}

export { ProductListPage }
