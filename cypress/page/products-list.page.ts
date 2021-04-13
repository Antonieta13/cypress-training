class ProductListPage {
    private addToCart: string;
    private ProceedToCheckout: string
    private productList: string

    constructor() {
        this.addToCart = "a.button.ajax_add_to_cart_button.btn.btn-default";
        this.ProceedToCheckout = "[style*=\"display: block;\"] .button-container > a"
        this.productList = "#center_column ul.product_list li"
    }
    public goAddToCart(name: string): void {
        var product = this.findProductByName(name).find(this.addToCart).click()
    }

    public GoToCheckout(): void {
        cy.get(this.ProceedToCheckout).click()
    }

    private findProductByName(name: string): Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productList).filter(`:contains(${name})`)
    }
}

export { ProductListPage }
