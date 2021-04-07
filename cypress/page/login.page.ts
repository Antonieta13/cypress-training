class LoginPage {
    private addemail: string;
    private addpassword: string;
    private clickLogin: string;
    private emailInput: string
    private passInput: string

    constructor() {
        this.emailInput = "#email"
        this.addemail = "aperdomobo@gmail.com";
        this.passInput = "#passwd"
        this.addpassword = "WorkshopProtractor";
        this.clickLogin = "#SubmitLogin";

    }

    public insertMail(): void {
        cy.get(this.emailInput).type(this.addemail)
    }

    public insertPassword(): void {
        cy.get(this.passInput).type(this.addpassword)
    }

    public goSubmit(): void {
        cy.get(this.clickLogin).click()
    }

}
export { LoginPage }




