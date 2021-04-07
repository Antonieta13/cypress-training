class AddressStepPage {
    private address: string;
    private confirm: string;

    constructor() {
        this.address = ".checker";
        this.confirm = ".cart_navigation span";
    }

    public ReviewAddress(): void {
        cy.get(this.address).click()
    }

    public ConfirmAddress(): void {
        cy.get(this.confirm).click()
    }

}
export { AddressStepPage }



