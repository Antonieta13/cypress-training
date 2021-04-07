class LoginPage {
    private clickLogin: string;
    private emailInput: string
    private passInput: string

    constructor() {
        this.emailInput = "#email"
        this.passInput = "#passwd"
        this.clickLogin = "#SubmitLogin";

    }

    public insertMail(email: string): void {
        cy.get(this.emailInput).type(email)
    }

    public insertPassword(pass: string): void {
        cy.get(this.passInput).type(pass)
    }

    public goSubmit(): void {
        cy.get(this.clickLogin).click()
    }

}
export { LoginPage }
