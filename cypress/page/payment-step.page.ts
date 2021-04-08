class PaymentStepPage {
    private paymentT: string;
    private paymentC: string;
    private confirmationO: string;
    // private confirmationOrder: string;


    constructor() {
        this.paymentT = "a.bankwire";
        this.paymentC = ".cart_navigation span";
        this.confirmationO = "#center_column > div > p > strong";
    }

    public SelectPayment(): void {
        cy.get(this.paymentT).click()
    }

    public ConfirmPayment(): void {
        cy.get(this.paymentC).click()
    }


    public GetConfirmationMessage(): Chainable<JQuery<HTMLElement>> {
        return cy.get(this.confirmationO)
    }

}
export { PaymentStepPage }
