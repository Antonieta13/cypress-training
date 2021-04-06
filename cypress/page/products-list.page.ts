class ProductListPage {
    private addToCart: string;
    private thisButton: string

    constructor() {
        this.addToCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.thisButton = "[style*=\"display: block;\"] .button-container > a"
    }
    public goAddToCart(): void {
        cy.get(this.addToCart).click()
    }

    public goThisButton(): void {
        cy.get(this.thisButton).click()
    }
}

export { ProductListPage }